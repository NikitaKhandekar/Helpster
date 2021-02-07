import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl='http://localhost:8080';

  constructor(private http : HttpClient, router:Router) { }

  verifyLoginAdmin(admin:Object):Observable<any>{
    console.log("Login info" + admin);
    return this.http.post(this.baseUrl+'/admin/login/',admin); 
  }

  getListedServices():Observable<any>{
    return this.http.get(this.baseUrl+'/admin/getListedServices');
  }

  addListedCategory(category:Object,serviceName:String):Observable<any>{
    console.log("Service info" + category);
    return this.http.post(this.baseUrl+'/admin/addListedService/'+serviceName,category);
  }

  deleteCategory(cId:Number):Observable<any>{
    console.log("cid"+cId);
    return this.http.delete(this.baseUrl+"/admin/deleteListedCategory/"+cId);
  }

  viewHelpsters():Observable<any>{
    return this.http.get(this.baseUrl+"/helpster");
  }

  deleteHelpster(hId:Number):Observable<any>{
    console.log("hId"+hId);
    return this.http.delete(this.baseUrl+"/helpster/deleteHelpster/"+hId);
  }

  viewCustomers():Observable<any>{
    return this.http.get(this.baseUrl+"/customer");
  }

  deleteCustomer(cId:Number):Observable<any>{
    console.log("cId"+cId);
    return this.http.delete(this.baseUrl+"/customer/deleteCustomer/"+cId);
  }

  viewBookings():Observable<any>{
    return this.http.get(this.baseUrl+"/admin/getAllBookings");
  }
}
