import { Component, OnInit } from '@angular/core';
import { HelpsterService } from 'src/app/app-services/helpster.service';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-show-helpster-services',
  templateUrl: './show-helpster-services.component.html',
  styleUrls: ['./show-helpster-services.component.css']
})
export class ShowHelpsterServicesComponent implements OnInit {

  serviceList: Service[]=[];
  deletedService :Service=new Service();
  constructor(private helpsterService: HelpsterService, private router: Router) { }

  ngOnInit() {
    this.fetchServiceList();
  }

  fetchServiceList() {
    this.helpsterService.getHelpsterServices().subscribe(res => {
          this.serviceList=res;
    },
      err => {
        alert("An error has occured, Please try again !!!");
        return;
      });
  }

  onEdit(sId:number){
    this.helpsterService.serviceId=sId;
    this.router.navigate(['/helpster/EditService']);

  }

  onDelete(sId:number){
    this.helpsterService.serviceId=sId;
    this.router.navigate(['/helpster/DeleteService']);
  }

  

}
