import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchService } from '../models/Service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl='http://localhost:8080';

  constructor(private http : HttpClient, router:Router) { }

  saveHelpster(customer:Object):Observable<Object>{
    console.log("Helpster info" + customer);
    return this.http.post(this.baseUrl+'/customer/register',customer);
  }

  verifyLoginCustomer(email:String,password:String):Observable<any>{
    console.log("Login info" + email+password);
    return this.http.get(this.baseUrl+'/customer/login/'+email+"/"+password); 
  }

  fetchServices(service:SearchService):Observable<any>{
    return this.http.post(this.baseUrl+'/customer/getAvailableServices',service);
  }

  getHelpsterForService(serviceId:number):Observable<any>{
    return this.http.get(this.baseUrl+'/customer/getHelpsterInfo/'+serviceId);
  }

  addBooking(booking:Object,serviceId:number):Observable<any>{
    console.log("Booking info" + booking);
    return this.http.post(this.baseUrl+'/customer/'+sessionStorage.getItem("LoggedInCustomer")+'/placeBooking/'+serviceId,booking);
  }

  addBookingFeedback(bookingFeedback:Object):Observable<any>{
    console.log("Booking info" + bookingFeedback);
    return this.http.put(this.baseUrl+'/customer/addFeedback/',bookingFeedback);
  }

  getCustomerByEmail():Observable<any>{
    return this.http.get(this.baseUrl+"/customer/"+sessionStorage.getItem("LoggedInCustomer")+"/getProfile");
  }

  updateCustomer(customer: Object): Observable<any> {
    return this.http.put(this.baseUrl+"/customer/updateCustomerInfo", customer);
  }

  getCustomerBookings():Observable<any>{
    return this.http.get(this.baseUrl+"/customer/"+sessionStorage.getItem("LoggedInCustomer")+"/getBookings");
  }

  getListedServices():Observable<any>{
    return this.http.get(this.baseUrl+'/admin/getListedServices');
  }
}
