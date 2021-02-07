import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { HelpsterService } from 'src/app/app-services/helpster.service';

@Component({
  selector: 'app-edit-helpster-info',
  templateUrl: './edit-helpster-info.component.html',
  styleUrls: ['./edit-helpster-info.component.css']
})
export class EditHelpsterInfoComponent implements OnInit {

  helpster:User =new User();

  constructor(private helpsterService: HelpsterService, private router: Router) { }

  ngOnInit(): void {
    this.helpsterService.getHelpsterByEmail().subscribe(res => {
      this.helpster=res;
     // this.helpster.id=res.hid;
      console.log(res);
      console.log(this.helpster);
  },
    err => {
      alert("An error has occured, Please try again !!!");
      return;
    });
  }

  onSubmit(){
    if(this.helpster.email!=sessionStorage.getItem("LoggedInHelpster"))
    {
      sessionStorage.setItem("LoggedInHelpster",this.helpster.email)
    }
    console.log(this.helpster);
    this.editHelpsterInfo();
  }

  editHelpsterInfo(){
    this.helpsterService.updateHelpster(this.helpster).subscribe(res => {
      
      this.router.navigate(['/helpster/ShowHelpsterServices']);
  },
    err => {
      alert("An error has occured, Please try again !!!");
    });
  }

}
