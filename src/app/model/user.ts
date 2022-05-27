import { Role } from "./role"
import { Job } from './job';
import { Item } from "./item";


export class User {

    id!:number
    name!:string
    email!:string
    userName!:string
    userPassword!:string
    userImage:any
    joinedDate!:Date
    roles!:Role[]
    jobItems!:Item[]
    jobList!:Job[]
    isActive!:boolean
    isLocked!:boolean
}
