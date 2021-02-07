import { Component, OnInit } from '@angular/core';
import { ListedCategory, Service } from 'src/app/models/Service';
import { Router } from '@angular/router';
import { HelpsterService } from 'src/app/app-services/helpster.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  newService : Service= new Service() ;
  successfullyAdded:  boolean = false;
  availableDays: string[] = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
  serviceList : Service[]=[];
  categoryList : ListedCategory[]=[];
  displayServices : string[]=[];
  displayCategories : string[]=[];
  locality:String="";
  cities:string[]=["Pune","Mumbai","Nagpur","Nashik"];

  constructor(private helpsterService: HelpsterService, private router: Router) { }


  ngOnInit(): void {

    
    this.helpsterService.getListedServices().subscribe(res => {
      this.categoryList=res;
      console.log(this.categoryList);
      for(let i=0;i<this.categoryList.length;i++){
        if(!this.displayServices.includes(this.categoryList[i].associatedListedService.serviceName)){
          this.displayServices.push(this.categoryList[i].associatedListedService.serviceName);
        }
      }
      this.newService.serviceName=this.displayServices[0];
      for(let i=0;i<this.categoryList.length;i++){
        if(this.categoryList[i].associatedListedService.serviceName==this.displayServices[0]){
            this.displayCategories.push(this.categoryList[i].cName);
        }
      }
      this.newService.category=this.displayCategories[0];
      this.newService.city=this.cities[0];
      console.log(this.displayServices);
    },
    err => {
      alert("An error has occured, Please try again !!!");
      return;
    });
    
  }

  onSubmit(){
 // this.newService.locality=this.newService.locality.trimStart().trimEnd();
  this.newService.availableDays=this.availableDays;
  this.addNewService();
  }
  
  addNewService(){
      this.helpsterService.addHelpsterService(this.newService).subscribe(res => {
          this.successfullyAdded=true;
          this.router.navigate(['/helpster/ShowHelpsterServices']);
      },
        err => {
          alert("An error has occured, Please try again !!!");
        });
   }

   addDay(e:any){
      if(e.target.checked)
      this.availableDays.push(e.target.value);

    else{
      for(let i=0 ; i<this.availableDays.length;i++){
        if(this.availableDays[i]==e.target.value){
        this.availableDays.splice(i,1);
          break;
        }
      }
    }
   }

   changeServiceName(event:any){
    this.displayCategories=[];
    for(let i=0;i<this.categoryList.length;i++){
      if(this.categoryList[i].associatedListedService.serviceName==event.target.value){
          this.displayCategories.push(this.categoryList[i].cName);
      }
    }
    this.newService.category=this.displayCategories[0];

  }
}

