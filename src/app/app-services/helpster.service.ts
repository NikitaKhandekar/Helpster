import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HelpsterService {

  private baseUrl='http://localhost:8080';
  serviceId : number=0;


  constructor(private http : HttpClient, router:Router) { }

  saveHelpster(helpster:Object):Observable<Object>{
    console.log("Helpster info" + helpster);
    return this.http.post(this.baseUrl+'/helpster/register',helpster);
  }

  verifyLoginHelpster(email:String,password:String):Observable<any>{

    console.log("Login info" + email+password);
    return this.http.get(this.baseUrl+'/helpster/login/'+email+"/"+password);
    
  }

  getHelpsterServices():Observable<any>{
    return this.http.get(this.baseUrl+'/helpster/'+sessionStorage.getItem("LoggedInHelpster")+"/getServices");
  }


  addHelpsterService(service:Object):Observable<Object>{
    console.log("Service info" + service);
    return this.http.post(this.baseUrl+"/helpster/"+sessionStorage.getItem("LoggedInHelpster")+"/postService",service);
  }

  setHelpsterServiceId(sId:number){
    this.serviceId=sId;
  }

  getHelpsterServiceId():number{
    return this.serviceId;
  }

  getServiceById():Observable<any>{
    return this.http.get(this.baseUrl+"/helpster/service/"+this.serviceId);
  }

  getHelpsterByEmail():Observable<any>{
    return this.http.get(this.baseUrl+"/helpster/"+sessionStorage.getItem("LoggedInHelpster"));
  }

  updateService(service: Object): Observable<any> {
    return this.http.put(this.baseUrl+"/helpster/"+sessionStorage.getItem("LoggedInHelpster")+"/updateService", service);
  }

  updateHelpster(helpster: Object): Observable<any> {
    return this.http.put(this.baseUrl+"/helpster/updateHelpsterInfo", helpster);
  }

  deleteService(): Observable<any> {
    console.log(this.serviceId);
    return this.http.delete(this.baseUrl+"/helpster/deleteService/"+this.serviceId);
  }

  getHelpsterBookings():Observable<any>{
    return this.http.get(this.baseUrl+"/helpster/"+sessionStorage.getItem("LoggedInHelpster")+"/getBookings");
  }

  getListedServices():Observable<any>{
    return this.http.get(this.baseUrl+'/admin/getListedServices');
  }
}
