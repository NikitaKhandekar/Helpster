import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/Service';
import { CustomerService } from 'src/app/app-services/customer.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-show-available-services',
  templateUrl: './show-available-services.component.html',
  styleUrls: ['./show-available-services.component.css']
})
export class ShowAvailableServicesComponent implements OnInit {

  serviceList : Service[]=[];
  helpster : User=new User();
  helpsterList : User[]=[];
  newBooking: Booking=new Booking();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem("SearchedService")!));
    console.log("In show available component");
    this.customerService.fetchServices(JSON.parse(sessionStorage.getItem("SearchedService")!)).subscribe(res => {
    console.log(res);
    this.serviceList=res;
    console.log(this.serviceList);
},
err => {
  alert("No services searched yet, please search and try again !!!");
  return;
  });
}

  onBooking(element:any, text:String,serviceId:number){
    this.customerService.addBooking(this.newBooking,serviceId).subscribe(res => {
      console.log(res);
      this.newBooking=res;
      console.log(this.newBooking);
      this.ngOnInit();
//      sessionStorage.setItem("CurrentBooking",JSON.stringify(this.newBooking));
//      this.router.navigate(['/customer/GiveFeedback']);
},
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
    
    element.textContent = text;
    element.disabled = true;
  }
}

