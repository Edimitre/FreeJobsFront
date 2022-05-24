import { Role } from "./role"

export class User {

    id!:number
    name!:string
    email!:string
    userName!:string
    userPassword!:string
    userImage:any
    joinedDate!:Date
    roles!:Role[]
    isActive!:boolean
    isLocked!:boolean
}
