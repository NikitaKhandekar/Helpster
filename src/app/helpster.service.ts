import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class HelpsterService {
  users: Array<User>
  cities: Array<string>
  locality: Map<string, Array<string>>


  services: Array<any> = [
    { name: 'Household', category: ["Cooking", "Cleaning", "Washing"]},
    { name: 'Outdoor', category: ["Security Gauard", "Gardening"]},
    { name: 'Farm', category: ["Watering", "Monitoring", "Crop Cultivation"]},
    { name: 'Transport', category: ["Car Cleaning", "Driving"]}
  ];

  constructor() {
    this.users = new Array();


    this.cities = ["Pune", "Mumbai", "Nagpur"];
    this.locality = new Map();
    this.locality.set("Pune", ["Kothrud", "Bavdhan", "Kharadi", "Wakad", "Wagholi", "Hadpasar"])
    this.locality.set("Mumbai", ["Thane", "Pavel", "Bandra", "Churgate", "CST", "Kharghar"])
    this.locality.set("Nagpur", ["Sadar", "Buldi", "Mahal", "Vardhaman Nagar"])
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
      observer.next(this.services.map(service => service.name))
    })
  }

  getAllCategories(service: string): Observable<String[]> {
    return new Observable((observer) => {
      observer.next(this.services.find(s => s.name == service).category)
    })
  }

  getAllCities(): Observable<String[]> {
    return new Observable((observer) => {
      observer.next(this.cities)
    })
  }

  getAllLocalities(city: string): Observable<String[]> {
    return new Observable((observer) => {
      observer.next(this.locality[city])
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
