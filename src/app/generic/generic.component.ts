import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelpsterService } from '../helpster.service';
import { Helpster } from '../Helpster';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styles: []
})
export class GenericComponent implements OnInit {
  helpster: Helpster[] = [];

  constructor(private route:Router, private service: HelpsterService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.service.getAllHelpster().subscribe(
      data => this.helpster = data,
      error => console.log("error " + error)
    );
  }
}
