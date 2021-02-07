import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerAuthGuardService implements CanActivate{

  constructor(private router:Router) { }
  
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem("LoggedInCustomer")==null)
    {
      this.router.navigate(['/home']);
      return false;
    }
    else 
         return true;
  }
}
