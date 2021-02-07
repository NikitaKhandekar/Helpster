import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/Booking';
import { CustomerService } from 'src/app/app-services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrls: ['./get-bookings.component.css']
})
export class GetBookingsComponent implements OnInit {

  bookingList: Booking[]=[];

  constructor(private customerService: CustomerService, private router: Router) { }


  ngOnInit(): void {
    this.customerService.getCustomerBookings().subscribe(res => {
      this.bookingList=res;
      console.log(this.bookingList);
  },
  err => {
    alert("No bookings present, please book a service and try again !!!");
    return;
  });
  }

  goToFeedbackPage(booking:Booking){
    sessionStorage.setItem("CurrentBooking",JSON.stringify(booking));
    this.router.navigate(['/customer/GiveFeedback']);
    
  }

  checkIfFeedbackGiven(booking:Booking){
    if(booking.rating==-1 || booking.feedbackDescription=="")
      return false;

    else
      return true;
  }

}
