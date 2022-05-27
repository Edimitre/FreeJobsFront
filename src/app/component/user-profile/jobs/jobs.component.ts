import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { Job } from 'src/app/model/job';
import { JobService } from '../../../service/job.service';
import { UserService } from '../../../service/user.service';
import { JobType } from '../../../model/job-type';
import { throwError } from 'rxjs';
import { ItemService } from '../../../service/item.service';



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private jobService: JobService, private userService: UserService, private itemService: ItemService) { }


  jobTypePaid: JobType = { "id": 1, "name": "PAID", "description": "job with payment" }

  jobTypeExchange: JobType = { "id": 2, "name": "EXCHANGE", "description": "job in exchange for something" }

  jobTypesList = [this.jobTypePaid, this.jobTypeExchange]

  jobType: JobType = new JobType()

  item: Item = new Item()

  itemList: Item[] = []

  job: Job = new Job()

  jobList: Job[] = []


  ngOnInit(): void {

    this.userService.getUserByUserName()

    this.itemService.getUserItems().subscribe(res => {

      this.itemList = res
    })
  }

  getUserJobs() {

    this.jobService.getUserJobs()
  }



  selectJobType(event: any) {


    this.getJobTypeFromName(event.target.value)


  }

  getJobTypeFromName(name: string) {

    this.jobTypesList.forEach((jt) => {

      if (jt.name == name) {
        this.jobType = jt
        console.log(this.jobType);
      }
    })

  }


  addItemToJob(item: Item) {

    if(this.job.itemList.indexOf(item) !== -1){
      console.log("item eshte edhur njehere ");
      
    }else{

      this.job.itemList.push(item)
      console.log(this.job.itemList);
      
    }


  }



  registerJob(job: Job) {

    this.jobService.registerJob(job)
  }


  selectItem(event: any) {



    this.getItemFromName(event.target.value)

  }

  getItemFromName(name: string) {

    this.itemList.forEach((it) => {
      if (it.name == name) {
        this.item = it
      }
    })

  }

  jobHasPayment(jobType: JobType): boolean {

    if (jobType.name === "PAID") {
      return true
    } else {
      return false
    }

  }

  jobHasItem(jobType: JobType): boolean {

    if (jobType.name === "EXCHANGE") {
      return true
    } else {
      return false
    }

  }

  saveJob(){

    
    this.jobService.registerJob(this.job).subscribe(res =>{
      console.log(res);
      
    })

  }


}
