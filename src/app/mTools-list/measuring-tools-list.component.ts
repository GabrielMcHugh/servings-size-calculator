import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ListID, Utensils, UtensilsList } from '../types/UtensilsList';

@Component({
  selector: 'app-measuring-tools-list',
  templateUrl: './measuring-tools-list.component.html',
  styleUrls: ['./measuring-tools-list.component.scss']
})
export class MeasuringToolsListComponent implements OnInit {
  measuringTools: {order: number}[] = [{order: 1}];
  selectedTools: any;
  volume: number = 0

  utensilsList: UtensilsList = [
    { id: '1 cup', selected: false, serves: 0, volume: 236.588, order: 1},
    { id: '1/2 cup', selected: false, serves: 0, volume: 118.294, order: 2},
    { id: '1/3 cup', selected: false, serves: 0, volume: 78.86195687, order: 3},
    { id: '1/4 cup', selected: false, serves: 0, volume: 59.14706, order: 4},

    { id: '1 Tblsp', selected: false, serves: 0, volume: 14.7868, order: 5},
    { id: '1/2 Tblsp', selected: false, serves: 0, volume: 7.39338, order: 6},

    { id: '1 Tsp', selected: false, serves: 0, volume: 4.92892, order: 7},
    { id: '1/2 Tsp', selected: false, serves: 0, volume: 2.46446, order: 8},
    { id: '1/3 Tsp', selected: false, serves: 0, volume: 1.642956904, order: 9},
    { id: '1/4 Tsp', selected: false, serves: 0, volume: 1.23223, order: 10},
  ]



  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.selectedUtensil$.subscribe((value) => {
      if (!!value) {
        this.updateUtensilsList(value)
        this.updateVolume()
        this.setUtensilsList()
      }
    })

    this.sharedService.changedVolume$.subscribe((value) => {
      this.volume = value as number
      this.updateVolume()
      this.setUtensilsList()
    })

  }

  setUtensilsList() {
    this.sharedService.setUtensilList(this.utensilsList)
  }

  addServingInput() {
    this.measuringTools.push({order: 1})
  }

  updateUtensilsList(value: any) {

    //select value
    this.utensilsList.every(e => {
      if (e.id === value.utensil) {
        e.selected = !e.selected
        return false
      }
      return true
    })

    //unselect prev value
    this.utensilsList.every(e => {
      if (e.id === value.prevUtensil) {
        e.selected = !e.selected
        return false
      }
      return true
    })
  }

  updateVolume() {
    let remainder = this.volume
    //loop through the list of utensils and set their volumes assuming the list is sorted
    this.utensilsList.forEach(x => {
      if (x.selected) {
        let serves = (remainder / x.volume) >> 0
        x.serves = serves
        remainder -= (x.volume * serves)
      } else {
        x.serves = 0
      }
    })
  }

  removeItem(selected: string, index: number) {
    //remove item from array, unselect utensil, recalculate volume
    this.measuringTools.splice(index, 1)
    this.utensilsList.every(e => {
      if (e.id === selected) {
        e.selected = false
        return false
      } else return true
    })
    this.updateVolume()
    this.setUtensilsList()
  }
}
