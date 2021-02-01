import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Helpster } from './Helpster';
 
@Injectable({
  providedIn: 'root'
})
export class HelpsterService {
  helpsters:Array<Helpster> = new Array()
  id:number = 1
  private generateHelpsterId():number {
      return this.id++;
  }

  getAllHelpster():Observable<Helpster[]> {
    return new Observable((observer) => {
        observer.next(this.helpsters)
    })
  }

  addHelpster(h: Helpster):Observable<Helpster> {
      h.id = this.generateHelpsterId()
      this.helpsters[this.helpsters.length] = h
      return new Observable((observer) => {
        observer.next(h)
    })
  }
}
