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


  constructor() { }

  setUtensil(utensil: string) {
    console.log('utensil', utensil)
    this.utensil$.next(utensil)
  }
  
  setUtensilList(utensilList: any) {
    console.log('utensilList', utensilList)
    this.utensilList$.next(utensilList)
  }
}
