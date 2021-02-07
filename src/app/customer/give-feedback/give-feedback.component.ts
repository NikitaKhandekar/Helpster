import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/app-services/customer.service';
import { Router } from '@angular/router';
import { BookingFeedback,Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})


export class GiveFeedbackComponent implements OnInit {

  currentRate = 0;
  bookingFeedback : BookingFeedback=new BookingFeedback();
  booking : Booking=new Booking();

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.booking=JSON.parse(sessionStorage.getItem("CurrentBooking")!);
    this.bookingFeedback.bookingId=this.booking.bookingId;
  }

  onSubmit(){
    this.customerService.addBookingFeedback(this.bookingFeedback).subscribe(res => {
      this.booking=res;
      console.log(this.booking);
      this.router.navigate(['/customer/ShowBookings']);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });

  }

}
