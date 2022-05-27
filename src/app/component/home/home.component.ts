import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { Job } from '../../model/job';
import { User } from 'src/app/model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobList:Job[] = []
  
  constructor(private jobService:JobService,private userService:UserService) { }

  user:User = new User()
  
  ngOnInit(): void {
  
    this.userService.getUserByUserName()

    this.loadAllJobs()
  
  }

  loadAllJobs(){

    this.jobService.getAllJobs().subscribe(res => {

      this.jobList = res
      console.log(this.jobList = res);
      
    })

  }

}
