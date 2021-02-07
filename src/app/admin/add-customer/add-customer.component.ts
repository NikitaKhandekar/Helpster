import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/app-services/customer.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }

  customer : User = new User();

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.customer);
    this.addCustomer();
  }

  addCustomer(){
    this.customerService.saveHelpster(this.customer).subscribe(res => {
      this.router.navigate(['/admin/ViewCustomers']);
  },
    err => {
      alert("An error has occured, Please try again !!!");
    });
   }
}
