import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class HelpsterService {
  users: Array<User>
  services: Array<string>
  categories: Map<string, Array<string>>


  constructor() {
    this.users = new Array();
    this.services = ["Household", "Outdoor", "Farm", "Transport"];
    this.categories = new Map();
    this.categories.set("Household", ["Cooking", "Cleaning", "Washing"])
    this.categories.set("Outdoor", ["Security Gauard", "Gardening"])
    this.categories.set("Farm", ["Watering", "Monitoring", "Crop Cultivation"])
    this.categories.set("Transport", ["Car Cleaning", "Driving"])
  }

  id: number = 1
  private generateHelpsterId(): number {
    return this.id++;
  }

  registerHelpster(helpster: User): Observable<Boolean> {
    return new Observable((observer) => {
      this.users[this.users.length] = helpster
      observer.next(true)
    })
  }

  login(email: string, password: string): Observable<Boolean> {
    return new Observable((observer) => {
      console.log("rajat length" + this.users.length)
      for (var helpster of this.users) {
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

  getAllServices(): Observable<String[]> {
    return new Observable((observer) => {
      observer.next(this.services)
    })
  }

  getAllCategories(service: string): Observable<String[]> {
    return new Observable((observer) => {
      observer.next(this.categories[service])
    })
  }

  getAllHelpster(): Observable<User[]> {
    return new Observable((observer) => {
      observer.next(this.users)
    })
  }

  addHelpster(h: User): Observable<User> {
    this.users[this.users.length] = h
    return new Observable((observer) => {
      observer.next(h)
    })
  }
}
