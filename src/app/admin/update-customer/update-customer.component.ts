import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/app-services/customer.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }

  customer : User = new User();

  ngOnInit(): void {
    this.customer=JSON.parse(sessionStorage.getItem("EditCustomer")!);
  }

  onSubmit(){
    this.customerService.updateCustomer(this.customer).subscribe(res => {
      this.customer=res;
      console.log(this.customer);
      sessionStorage.removeItem("EditCustomer");
      this.router.navigate(['/admin/ViewCustomers']);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
  }
}
