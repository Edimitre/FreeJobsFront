import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  saveRoles(roles: []) {

    
    
    localStorage.setItem('roles', JSON.stringify(roles));

  }




  saveUserName(userName:string){
    localStorage.setItem('userName', userName)
  }
  
  getUserName(){
    return localStorage.getItem('userName')
  }
  

  getRoles(): [] {

    let roles = localStorage.getItem('roles');


    return JSON.parse(roles!);

  }

  saveToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  getToken(): string {

    return localStorage.getItem('jwtToken')!;
  }

  clearAll() {

    localStorage.clear();
  }


  isLoggedIn(){


    return this.getRoles() && this.getToken()
  }

  saveRoleName(roleName:string){

    localStorage.setItem('roleName', roleName);

  }

  isAdmin():boolean{
 
    let role = localStorage.getItem("roleName")
    if(role === "ADMIN"){
      return true
    }else{
      return false
    }
    

  }
}
