import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/Booking';
import { HelpsterService } from 'src/app/app-services/helpster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-helpster-bookings',
  templateUrl: './get-helpster-bookings.component.html',
  styleUrls: ['./get-helpster-bookings.component.css']
})
export class GetHelpsterBookingsComponent implements OnInit {

  bookingList: Booking[]=[];

  constructor(private helpsterService: HelpsterService, private router: Router) { }


  ngOnInit(): void {
    this.helpsterService.getHelpsterBookings().subscribe(res => {
      this.bookingList=res;
      console.log(this.bookingList);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
  }

}
