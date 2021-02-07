import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpsterService } from '../app-services/helpster.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register-helpster',
  templateUrl: './register-helpster.component.html',
  styleUrls: ['./register-helpster.component.css']
})
export class RegisterHelpsterComponent implements OnInit {
  
  user : User = new User();

  constructor(private helpsterService: HelpsterService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user);
    this.registerUser();
  }

  registerUser(){
      this.helpsterService.saveHelpster(this.user).subscribe(res => {
          this.router.navigate(['/loginHelpster']);
      },
        err => {
          alert("The Helpster email id or contact no. already exists , Please try again !!!");
        });
   }

}
