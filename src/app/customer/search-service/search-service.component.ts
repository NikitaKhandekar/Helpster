import { Component, OnInit } from '@angular/core';
import { ListedCategory, SearchService, Service } from 'src/app/models/Service';
import { CustomerService } from 'src/app/app-services/customer.service';
import { Router } from '@angular/router';
//import { TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-search-service',
  templateUrl: './search-service.component.html',
  styleUrls: ['./search-service.component.css']
})
export class SearchServiceComponent implements OnInit {

  service : SearchService=new SearchService();
  serviceList : Service[]=[];
  categoryList : ListedCategory[]=[];
  displayServices : string[]=[];
  displayCategories : string[]=[];
  locality:String="";
  cities:string[]=["Pune","Mumbai","Nagpur","Nashik"];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {

    this.service.serviceName="All";
    this.service.category="All";
    this.service.city="All";
    this.service.locality="All";

    this.customerService.getListedServices().subscribe(res => {
      this.categoryList=res;
      console.log(this.categoryList);
      for(let i=0;i<this.categoryList.length;i++){
        if(!this.displayServices.includes(this.categoryList[i].associatedListedService.serviceName)){
          this.displayServices.push(this.categoryList[i].associatedListedService.serviceName);
        }
      }
      console.log(this.displayServices);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });

  }

  onSubmit(){
    
      //this.service.locality=this.service.locality.trimStart().trimEnd();
      sessionStorage.setItem("SearchedService",JSON.stringify(this.service));
      console.log(JSON.parse(sessionStorage.getItem("SearchedService")!));
      this.customerService.fetchServices(this.service).subscribe(res => {
      this.serviceList=res;
      this.router.navigate(['/customer/ShowAvailableServices']);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
  }

  changeServiceName(event:any){
    this.displayCategories=[];
    for(let i=0;i<this.categoryList.length;i++){
      if(this.categoryList[i].associatedListedService.serviceName==event.target.value){
        this.service.category="All";
          this.displayCategories.push(this.categoryList[i].cName);
      }
    }

    if(event.target.value=="All"){
      this.service.category="All";
    }
  }

  onFocus(event:any){
    if(event.target.value=="All")
    event.target.value="";
  }

  onOutFocus(event:any){
      this.locality=event.target.value;
      if(this.locality.trim()=="")
        event.target.value="All";

  }
}
