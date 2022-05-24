import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private userService:UserService){}
  canActivate():boolean {
    
    if(this.userService.isAdmin()){
      return true;
    }else{
      return false
    }
    
  }
  
}
