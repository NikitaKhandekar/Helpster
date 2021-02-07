import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpsterService } from 'src/app/app-services/helpster.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-update-helpster',
  templateUrl: './update-helpster.component.html',
  styleUrls: ['./update-helpster.component.css']
})
export class UpdateHelpsterComponent implements OnInit {

  constructor(private helpsterService: HelpsterService, private router: Router) { }

  helpster : User = new User();

  ngOnInit(): void {
    this.helpster=JSON.parse(sessionStorage.getItem("EditHelpster")!);
  }

  onSubmit(){
    this.helpsterService.updateHelpster(this.helpster).subscribe(res => {
      this.helpster=res;
      console.log(this.helpster);
      sessionStorage.removeItem("EditHelpster");
      this.router.navigate(['/admin/ViewHelpsters']);
  },
  err => {
    alert("An error has occured, Please try again !!!");
    return;
  });
  }

}
