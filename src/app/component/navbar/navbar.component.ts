import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name = ""
  imgFile:any
  email = ""
  userName = ""
  userPassword = ""
 
  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
  }


  isLoggedIn():boolean{
    if (this.userService.isLoggedIn()){
      return true
    }else{
      return false
    }
  }

  isAdmin(){
    return this.userService.isAdmin()
  }

  authenticate() {

    this.userName = (<HTMLInputElement>document.getElementById("userName")).value;
    this.userPassword = (<HTMLInputElement>document.getElementById("userPassword")).value;


    if(this.userName !=="" && this.userPassword!==""){
      this.userService.authenticate(this.userName, this.userPassword)
    }else{
   
      
      alert("fill in the details please !")
    }

    
  }

  register(){

    this.name = (<HTMLInputElement>document.getElementById("name")).value;
    this.email = (<HTMLInputElement>document.getElementById("inputUserEmail")).value;
    this.userName = (<HTMLInputElement>document.getElementById("inputUserName")).value;
    this.userPassword = (<HTMLInputElement>document.getElementById("inputPassword")).value;

    if(this.name!=="" && this.email !=="" && this.userName !=="" && this.userPassword !==""){

      this.userService.registerUser(this.name, this.imgFile,this.email,this.userName,this.userPassword)
    }else{
      alert("fill in the details please !")
    }
    

  }

  logout() {

    this.userService.logout()
    this.router.navigate(['home'])
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {

      this.imgFile = event.target.files[0]

      console.log(this.imgFile.type);


    }
  }

}
