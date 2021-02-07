import { Component, OnInit } from '@angular/core';
import { HelpsterService } from 'src/app/app-services/helpster.service';
import { Router } from '@angular/router';
import { ListedCategory, Service } from 'src/app/models/Service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  service : Service = new Service();
  successfullyEdited:  boolean = false;
  availableDays: string[] = ["MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];

  locality:String="";
  cities:string[]=["Pune","Mumbai","Nagpur","Nashik"];

  constructor(private helpsterService: HelpsterService, private router: Router) { }

  ngOnInit(): void {
    
    this.helpsterService.getServiceById().subscribe(res => {
      this.service=res;
      console.log(this.service);
  },
    err => {
      alert("An error has occured, Please try again !!!");
      return;
    });
     
  }

  onSubmit(){
  //  this.service.locality=this.service.locality.trimStart().trimEnd();
  this.service.availableDays=this.availableDays;
  this.editService();
    }

  editService(){
    this.helpsterService.updateService(this.service).subscribe(res => {
      this.successfullyEdited=true;
      this.service=res;
      console.log(this.service);
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
}
