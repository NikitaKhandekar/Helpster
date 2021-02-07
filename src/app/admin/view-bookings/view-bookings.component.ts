import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { Booking } from 'src/app/models/Booking';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.component.html',
  styleUrls: ['./view-bookings.component.css']
})
export class ViewBookingsComponent implements OnInit {

  bookingList:Booking[]=[];
  
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.viewBookings().subscribe(res => {
      this.bookingList=res;
      console.log(this.bookingList);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
  }
}
