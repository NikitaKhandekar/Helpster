import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInUser : User = new User;

  setLoggedInUser(user : User) { 
    this.loggedInUser=user;
  }

  getLoggedInUser():User{ 
    return this.loggedInUser;
  }

  helpsterLoggedIn():Boolean{
  
    if(sessionStorage.getItem("LoggedInHelpster")!=null)
    return true;
    return false;
  }

  customerLoggedIn():Boolean{
    if(sessionStorage.getItem("LoggedInCustomer")!=null)
    return true;
    return false;
  }

  adminLoggedIn():Boolean{
    if(sessionStorage.getItem("LoggedInAdmin")!=null)
    return true;
    return false;
  }
}


