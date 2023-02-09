import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShallowEqualityService {

  constructor() { }

  //Compares two flat objects and returns if they are equal
  public shallowEqual(object1: any, object2: any) {
    if (!object1 || !object2) return false

    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true
  }
}