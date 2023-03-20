import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ListID, Utensils, UtensilsList } from '../types/UtensilsList';

@Component({
  selector: 'app-measuring-tools-list',
  templateUrl: './measuring-tools-list.component.html',
  styleUrls: ['./measuring-tools-list.component.scss']
})
export class MeasuringToolsListComponent implements OnInit {
  measuringTools: { uID: number, order: number }[] = [];
  uidCounter: number = 0
  selectedTools: any;
  volume: number = 0

  utensilsList: UtensilsList = [
    { id: '1 cup', selected: false, serves: 0, volume: 236.588, order: 1 },
    { id: '1/2 cup', selected: false, serves: 0, volume: 118.294, order: 2 },
    { id: '1/3 cup', selected: false, serves: 0, volume: 78.86195687, order: 3 },
    { id: '1/4 cup', selected: false, serves: 0, volume: 59.14706, order: 4 },

    { id: '1 Tblsp', selected: false, serves: 0, volume: 14.7868, order: 5 },
    { id: '1/2 Tblsp', selected: false, serves: 0, volume: 7.39338, order: 6 },

    { id: '1 Tsp', selected: false, serves: 0, volume: 4.92892, order: 7 },
    { id: '1/2 Tsp', selected: false, serves: 0, volume: 2.46446, order: 8 },
    { id: '1/3 Tsp', selected: false, serves: 0, volume: 1.642956904, order: 9 },
    { id: '1/4 Tsp', selected: false, serves: 0, volume: 1.23223, order: 10 },
  ]

  constructor(private sharedService: SharedService) { 
    console.log('utensils list is type: ', typeof this.utensilsList)
  }

  ngOnInit(): void {
    this.sharedService.selectedUtensil$.subscribe((value) => {
      if (!!value) {
        this.updateUtensilsList(value)
        this.updateServes()
        this.setUtensilsList()
      }
    })

    this.sharedService.changedVolume$.subscribe((value) => {
      if (typeof value === 'number') this.volume = value as number
      this.updateServes()
      this.setUtensilsList()
    })

  }

  setUtensilsList() {
    this.sharedService.setUtensilList(this.utensilsList)
  }

  newListElement(uID: number) {
    let last = this.measuringTools.pop()!
    last.uID = uID
    this.measuringTools.push(last)
  }

  addServingInput() {
    this.uidCounter = Date.now()
    this.measuringTools.push({ uID: this.uidCounter, order: 11 })
  }

  updateUtensilsList(value: any) {
    //get listElement
    let listElement: { uID: number, order: number };
    this.measuringTools.every(e => {
      if (e.uID === value.uID) {
        listElement = e
        return false
      } return true
    })

    //select value
    this.utensilsList.every(e => {
      if (e.id === value.utensil) {
        e.selected = !e.selected
        listElement.order = e.order
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

    //SortList
    this.measuringTools.sort((a, b) => a.order - b.order)
  }

  //Updates the number of serves each utensil required of each selected utensil. Assumes
  //list is sorted. 
  updateServes() {
    let remainder = this.volume
    let smallestTool: string | undefined;

    //find the smallest selected utensil by looping backwards over the array.
    for (let x = this.utensilsList.length - 1; x >= 0; x--) {
      if (this.utensilsList[x].selected === true) {
        smallestTool = this.utensilsList[x].id
        break
      }
    }

    if (!smallestTool) return


    this.utensilsList.forEach(x => {
      if (x.selected) {
        let serves = (remainder / x.volume)
        if (x.id != smallestTool as string) {
          serves >>= 0
          x.serves = serves
        } else x.serves = +serves.toFixed(2)
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
    this.updateServes()
    this.setUtensilsList()
  }
}
