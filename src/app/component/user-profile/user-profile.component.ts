import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Job } from '../../model/job';
import { Item } from 'src/app/model/item';








@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  job: Job = new Job()
  user: User = new User()
  jobitem: Item = new Item()


  
  constructor(private userService: UserService) { }






  ngOnInit(): void {

    this.userService.getUserByUserName()
    this.user = this.userService.user


  }


}


