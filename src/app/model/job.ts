
import { Item } from './item';
import { User } from './user';
import { JobType } from './job-type';


export class Job {


    id!:number;

    name!:string

    description!:string

    jobType!:JobType

    itemList:Item[] = []

    announcedDate!:Date

    user!:User

    value!:number

    isValid!:boolean


}
