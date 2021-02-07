import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { ListedCategory } from 'src/app/models/Service';

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {

  categoryList : ListedCategory[]=[];

  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
      this.adminService.getListedServices().subscribe(res => {
        this.categoryList=res;
        console.log(this.categoryList);
    },
    err => {
      alert("An error has occured, Please try again !!!");
      return;
    });
    }

  onAdd(){
    this.router.navigate(['/admin/AddListedService']);
  }

  onDelete(cId:Number){
    this.adminService.deleteCategory(cId).subscribe(res => {
      console.log(this.categoryList);
      this.ngOnInit();
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });

  }

  }
