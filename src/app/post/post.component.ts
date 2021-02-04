import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HelpsterService } from '../helpster.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  categories: Array<any>;

  services: Array<any>;

  constructor(private service: HelpsterService) { }

  ngOnInit() {
    this.service.getAllServices().subscribe(
      data => this.services = data,
      error => console.log("error " + error)
    );
  }

  selectedService: string = "";

  changeService(service: string) {
    this.selectedService = service;
    this.service.getAllCategories(service).subscribe(
      data => this.categories = data,
      error => console.log("error " + error)
    );
  }

  onPost(postForm: NgForm) {

  }
}
