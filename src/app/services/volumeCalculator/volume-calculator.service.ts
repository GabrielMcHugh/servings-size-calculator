import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VolumeCalculatorService {

  mainUtensil = {tool: '1 cup', volume: 1}

  utensilsList = [
    {tool: '1/3 cup', selected: true, serves: 0, volume:  178.8627455,},
    {tool: '1/2 Tablespoon', selected: true,  serves: 0, volume: 4.92892159375},
    {tool: '1/2 Teaspoon', selected: true, serves: 0, volume: 11.642973333333333},
  ]

  constructor() { }

  calculateVolumes(volume: number) {
    let remainder = volume
    //loop through the list of utensils and set their volumes assuming the list is sorted
    this.utensilsList.forEach(x => {
      if (x.selected) {
        let serves = (remainder/x.volume) >> 0
        x.serves = serves
        remainder -= (x.volume*serves)
      }
    })
  }

  
}
