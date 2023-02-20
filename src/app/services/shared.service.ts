import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private utensil$ = new BehaviorSubject({})
  selectedUtensil$ = this.utensil$.asObservable()
  private utensilList$ = new BehaviorSubject({})
  selectedUtensilList$ = this.utensilList$.asObservable()
  private volume$ = new BehaviorSubject({})
  setVolume$ = this.utensil$.asObservable()


  constructor() { }

  setUtensil(utensilUpdate: {utensil: string, prevUtensil: string}) {
    this.utensil$.next(utensilUpdate)
  }
  
  setUtensilList(utensilList: any) {
    this.utensilList$.next(utensilList)
  }

  setVolume(volume: number) {
    this.volume$.next(volume)
  }
}
