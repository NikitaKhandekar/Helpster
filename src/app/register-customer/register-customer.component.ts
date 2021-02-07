import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../app-services/customer.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  user : User = new User();

  constructor(private customerService: CustomerService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.registerUser();
  }

  registerUser(){
      
    this.customerService.saveHelpster(this.user).subscribe(res => {
      this.router.navigate(['/loginCustomer']);
  },
    err => {
      alert("The customer email id or contact no. already exists , Please try again !!!");
    });
   }

}
