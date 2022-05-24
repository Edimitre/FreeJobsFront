import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  
  constructor(private userService:UserService) { }

  user:User = new User()
  
  
  
  ngOnInit(): void {

    this.loadUser()
    
    
  }

  loadUser(){

    
    this.userService.getUserByUserName().subscribe(res=>{
      this.user = res
      

      
    })

  }



}
