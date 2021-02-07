import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/app-services/customer.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-edit-customer-info',
  templateUrl: './edit-customer-info.component.html',
  styleUrls: ['./edit-customer-info.component.css']
})
export class EditCustomerInfoComponent implements OnInit {

  customer:User=new User();
  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.customerService.getCustomerByEmail().subscribe(res => {
      this.customer=res;
     // this.helpster.id=res.hid;
      console.log(res);
      console.log(this.customer);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
}

onSubmit(){
  if(this.customer.email!=sessionStorage.getItem("LoggedInCustomer"))
  {
    sessionStorage.setItem("LoggedInCustomer",this.customer.email)
  }
  console.log(this.customer);
  this.editCustomerInfo();
}

editCustomerInfo(){
  this.customerService.updateCustomer(this.customer).subscribe(res => {
    
    this.router.navigate(['/customer/ShowAvailableServices']);
},
  err => {
    alert("An error has occured, Please try again !!!");
  });
}

}
