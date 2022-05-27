import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../model/job';

import { User } from '../model/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  baseUrl = "http://localhost:8080/job"
  
  user:User = new User()
  
  constructor(private httpService:HttpClient, private userService:UserService) { }


  getUserJobs():Observable<Job[]>{

   
    let param="id="+this.userService.user.id
    
    return this.httpService.get<Job[]>(this.baseUrl + "/all/user?" + param)

  }

  getAllJobs():Observable<Job[]>{

    return this.httpService.get<Job[]>(this.baseUrl + "/all")

  }

  registerJob(job:Job){

    


    job.user = this.userService.user
    job.isValid=true
    job.announcedDate = new Date()
    
    JSON.stringify(job)


    
    return this.httpService.post<Job>(this.baseUrl + "/register?", job)

  }



}
