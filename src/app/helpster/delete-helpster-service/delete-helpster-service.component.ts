import { Component, OnInit } from '@angular/core';
import { HelpsterService } from 'src/app/app-services/helpster.service';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-delete-helpster-service',
  templateUrl: './delete-helpster-service.component.html',
  styleUrls: ['./delete-helpster-service.component.css']
})
export class DeleteHelpsterServiceComponent implements OnInit {
 
  delService : Service=new Service();
  constructor(private helpsterService: HelpsterService, private router: Router) { }

  ngOnInit(): void {

    
    this.helpsterService.deleteService().subscribe(res => {
      this.delService=res;
      this.router.navigate(['/helpster/ShowHelpsterServices']);
  });
  }
}
