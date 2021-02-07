import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/app-services/admin.service';
import { LoginService } from 'src/app/app-services/login.service';
import { Admin } from 'src/app/models/user';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin=new Admin();

  constructor(private router: Router,private adminService:AdminService,private loginService:LoginService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
      console.log(this.admin);
      this.loginAdmin();
  }

  loginAdmin(){
      this.adminService.verifyLoginAdmin(this.admin).subscribe(res => {
          
        sessionStorage.setItem("LoggedInAdmin",this.admin.email);
        this.router.navigate(['/admin/ViewServices']);
        console.log(sessionStorage.getItem("LoggedInAdmin"));
      },
        err => {
          alert("Invalid Admin email or password , Please try again !!!");
          return;
        });
      }
  }