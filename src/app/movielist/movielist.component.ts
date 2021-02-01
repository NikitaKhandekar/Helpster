import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styles: []
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private route:Router, private service: MovieService) {}

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.service.getAllMovies().subscribe(
      data => this.movies = data,
      error => console.log("error " + error)
    );
  }
}
