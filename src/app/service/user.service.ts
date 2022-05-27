import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from '../model/job';
import { User } from '../model/user';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8080/user"
  
  user:User = new User()
  
  constructor(private httpService:HttpClient,private authService:AuthenticationService) { }
  

  

  getLoggedUser():User{
    return this.user
  }
  
  isLoggedIn():boolean{
    if (this.authService.isLoggedIn()){
      return true
    }else{
      return false
    }
  }

  isAdmin():boolean{

    if(this.authService.isAdmin()){
      return true
    }else{
      return false
    }
  }

  authenticate(userName:string,userPassword:string) {


    console.log(`username ${userName}` + ` password ${userPassword}`);

    let userData = { "userName": userName, "userPassword": userPassword }



    return this.httpService.post<any>(this.baseUrl + "/authenticate", userData).subscribe(res =>{

      if ('jwtToken' in res) {
            this.authService.saveToken(res.jwtToken)
    
            this.authService.saveRoles(res.user.roles)

            this.authService.saveRoleName(res.user.roles[0].roleName)

            this.authService.saveUserName(res.user.userName)

            
    
            if (res.user.roles[0].roleName === "ADMIN") {
              console.log("logged as admin");
    
            } else {
    
              console.log("logged as user");
    
            }
          }

    });



  }

  getUserByUserName(){

    let userName = this.authService.getUserName()
    let param = "userName="+userName
    return this.httpService.get<User>(this.baseUrl+ "/getProfile?" + param).subscribe(res =>{
      this.user = res
    })
  }
 
  
  logout(){
    
    this.authService.clearAll()
    console.log("logged out");
    
  }

  registerUser(name:string,imgFile:File,email:string,userName:string,userPassword:string){

    let userData = { "name":name, "email":email, "userName": userName, "userPassword": userPassword }

    let input = new FormData();
    
    input.append('imgFile', imgFile);
    input.append('user', JSON.stringify(userData));
    



    return this.httpService.post<any>(this.baseUrl + "/register?", input).subscribe(res => {

      
      
      if(res.status === 500){
        alert("something went wrong")
        
      }else{
        console.log(" created user : "  + res.name);
        
      }

      
    })

  }



  
}
