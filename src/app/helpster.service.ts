import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class HelpsterService {
  helpsters: Array<User>

  constructor() {
    this.helpsters = new Array()
  }

  id: number = 1
  private generateHelpsterId(): number {
    return this.id++;
  }

  registerHelpster(helpster: User): Observable<Boolean> {
    return new Observable((observer) => {
      this.helpsters[this.helpsters.length] = helpster
      observer.next(true)
    })
  }

  login(email: string, password: string): Observable<Boolean> {
    return new Observable((observer) => {
      console.log("rajat length" + this.helpsters.length)
      for (var helpster of this.helpsters) {
        console.log("rajat " + helpster.email)
        if (helpster.email == email) {
          if (helpster.password == password) {
            localStorage.setItem("isUserLoggedIn", "true")
            observer.next(true)
            return
          }
        }
      }
      observer.error()
    })
  }

  getAllHelpster(): Observable<User[]> {
    return new Observable((observer) => {
      observer.next(this.helpsters)
    })
  }

  addHelpster(h: User): Observable<User> {
    this.helpsters[this.helpsters.length] = h
    return new Observable((observer) => {
      observer.next(h)
    })
  }
}
