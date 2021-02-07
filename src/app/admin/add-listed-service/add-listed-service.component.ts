import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { ListedCategory } from 'src/app/models/Service';
@Component({
  selector: 'app-add-listed-service',
  templateUrl: './add-listed-service.component.html',
  styleUrls: ['./add-listed-service.component.css']
})
export class AddListedServiceComponent implements OnInit {

  category : ListedCategory=new ListedCategory();
  serviceName : String ="";

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {

    

  }

  onSubmit(){

     this.adminService.addListedCategory(this.category,this.serviceName).subscribe(res => {
      console.log(res);  
      this.router.navigate(['/admin/ViewServices']);
    },
    err => {
      alert("An error has occured, Please try again !!!");
      return;
    });
    }

}
