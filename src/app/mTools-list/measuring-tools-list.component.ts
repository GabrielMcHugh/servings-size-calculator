import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { UtensilsList } from '../types/UtensilsList';

@Component({
  selector: 'app-measuring-tools-list',
  templateUrl: './measuring-tools-list.component.html',
  styleUrls: ['./measuring-tools-list.component.scss']
})
export class MeasuringToolsListComponent implements OnInit {
  measuringTools: string[] = [''];
  selectedTools: any;

  utensilsList = [
    { id: '1 cup', selected: false, serves: 0, volume: 236.588},
    { id: '1/2 cup', selected: false, serves: 0, volume: 118.294},
    { id: '1/3 cup', selected: false, serves: 0, volume: 78.86195687},
    { id: '1/4 cup', selected: false, serves: 0, volume: 59.14706},

    { id: '1 Tblsp', selected: false, serves: 0, volume: 14.7868},
    { id: '1/2 Tblsp', selected: false, serves: 0, volume: 7.39338},

    { id: '1 Tsp', selected: false, serves: 0, volume: 4.92892},
    { id: '1/2 Tsp', selected: false, serves: 0, volume: 2.46446},
    { id: '1/3 Tsp', selected: false, serves: 0, volume: 1.642956904},
    { id: '1/4 Tsp', selected: false, serves: 0, volume: 1.23223},
  ]



  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.selectedUtensil$.subscribe((value) => {
      if (!!value) {
        this.updateUtensilsList(value)
        this.setUtensilsList()
      }
    })

  }

  setUtensilsList() {
    this.sharedService.setUtensilList(this.utensilsList)
  }

  addServingInput() {
    this.measuringTools.push('')
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

    //unselect value
    this.utensilsList.every(e => {
      if (e.id === value.prevUtensil) {
        e.selected = !e.selected
        return false
      }
      return true
    })
  }



}
