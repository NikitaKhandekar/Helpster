import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { ListedCategory } from 'src/app/models/Service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view-helpsters',
  templateUrl: './view-helpsters.component.html',
  styleUrls: ['./view-helpsters.component.css']
})
export class ViewHelpstersComponent implements OnInit {

  helpsterList:User[]=[];
  
  constructor(private adminService:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.viewHelpsters().subscribe(res => {
      this.helpsterList=res;
      console.log(this.helpsterList);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
  }

  onAdd(){
    this.router.navigate(['/admin/AddHelpster']);
  }

  onEdit(helpster:User){
    sessionStorage.setItem("EditHelpster",JSON.stringify(helpster));
    this.router.navigate(['/admin/UpdateHelpster']);
  }

  onDelete(hId:Number){
    this.adminService.deleteHelpster(hId).subscribe(res => {
      this.ngOnInit();
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
}

}
