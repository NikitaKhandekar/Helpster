import { Component, OnInit } from '@angular/core';
import { HelpsterService } from 'src/app/app-services/helpster.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-helpster',
  templateUrl: './add-helpster.component.html',
  styleUrls: ['./add-helpster.component.css']
})
export class AddHelpsterComponent implements OnInit {

  constructor(private helpsterService: HelpsterService, private router: Router) { }

  helpster : User = new User();

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.helpster);
    this.addHelpster();
  }

  addHelpster(){
    this.helpsterService.saveHelpster(this.helpster).subscribe(res => {
      this.router.navigate(['/admin/ViewHelpsters']);
  },
    err => {
      alert("An error has occured, Please try again !!!");
    });
   }
}
