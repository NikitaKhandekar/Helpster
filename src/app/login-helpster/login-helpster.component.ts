import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpsterService } from '../app-services/helpster.service';
import { LoginService } from '../app-services/login.service';
import { LoginCredentials } from '../models/LoginCredentials';
import { User } from '../models/user';

@Component({
  selector: 'app-login-helpster',
  templateUrl: './login-helpster.component.html',
  styleUrls: ['./login-helpster.component.css']
})
export class LoginHelpsterComponent implements OnInit {

  loginInfo : LoginCredentials =new LoginCredentials();
  user : User = new User();

  constructor(private helpsterService: HelpsterService,private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginInfo);
    this.loginUser();
  }

  loginUser(){
  this.helpsterService.verifyLoginHelpster(this.loginInfo.email,this.loginInfo.password).subscribe(res => {
          
    sessionStorage.setItem("LoggedInHelpster",this.loginInfo.email);
    this.router.navigate(['/helpster/ShowHelpsterServices']);
    //this.loginService.setLoggedInUser(res);
    console.log(sessionStorage.getItem("LoggedInHelpster"));
  },
    err => {
      alert("Invalid Helpster email Id or password , please try again !!!");
      return;
    });
  }

}
