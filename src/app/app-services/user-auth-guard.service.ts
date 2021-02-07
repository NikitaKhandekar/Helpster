import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {LoginService} from '../app-services/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate{

  constructor(private authService:LoginService,private router:Router) { }
  
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;

  }
}