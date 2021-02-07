import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../app-services/customer.service';
import { LoginService } from '../app-services/login.service';
import { LoginCredentials } from '../models/LoginCredentials';
import { User } from '../models/user';

@Component({
  selector: 'app-login-customer',
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.css']
})
export class LoginCustomerComponent implements OnInit {

  loginInfo : LoginCredentials =new LoginCredentials();
  user : User = new User();
  
  constructor(private customerService: CustomerService,private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.loginInfo);
    this.loginUser();
  }

  loginUser(){
    
      this.customerService.verifyLoginCustomer(this.loginInfo.email,this.loginInfo.password).subscribe(res => {
          
      sessionStorage.setItem("LoggedInCustomer",this.loginInfo.email);
      this.router.navigate(['/customer/SearchServices']);
      this.loginService.setLoggedInUser(res);
      console.log(res);
    },
      err => {
        alert("Invalid customer email Id or password , please try again !!!");
        return;
      });
   }

}
