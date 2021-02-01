import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies:Array<Movie> = new Array()
  id:number = 1
  private generateStudentId():number {
      return this.id++;
  }

  getAllMovies():Observable<Movie[]> {
    return new Observable((observer) => {
        observer.next(this.movies)
    })
  }

  addMovie(m: Movie):Observable<Movie> {
      m.movieid = this.generateStudentId()
      this.movies[this.movies.length] = m
      return new Observable((observer) => {
        observer.next(m)
    })
  }
}
