import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = "http://localhost:8080/item"
  
  

  
  constructor(private userService:UserService,private httpClient:HttpClient) { }



  getUserItems():Observable<Item[]>{



    let param ="id="+this.userService.user.id

    return this.httpClient.get<Item[]>(this.baseUrl+"/user?" + param)


  }


  registerItem(name:string, imgFile:File, value:number, description :string){

    let item = {"name":name, "value":value, "description":description,"user":this.userService.user}

    let input = new FormData();
    
    
    input.append('item', JSON.stringify(item));
    input.append('imgFile', imgFile)
    

    return this.httpClient.post<Item>(this.baseUrl + "/register?", input).subscribe(res =>{
      console.log(res);
      
    })
  }



}
