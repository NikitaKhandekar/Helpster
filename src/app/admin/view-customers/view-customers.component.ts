import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  customerList:User[]=[];
  
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.viewCustomers().subscribe(res => {
      this.customerList=res;
      console.log(this.customerList);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
  }

  onAdd(){
    this.router.navigate(['/admin/AddCustomer']);
  }

  onEdit(customer:User){
    sessionStorage.setItem("EditCustomer",JSON.stringify(customer));
    this.router.navigate(['/admin/UpdateCustomer']);
  }

  onDelete(cId:Number){
    this.adminService.deleteCustomer(cId).subscribe(res => {
      this.ngOnInit();
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
}

}
