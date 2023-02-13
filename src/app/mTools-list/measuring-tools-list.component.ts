import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-measuring-tools-list',
  templateUrl: './measuring-tools-list.component.html',
  styleUrls: ['./measuring-tools-list.component.scss']
})
export class MeasuringToolsListComponent implements OnInit {
  measuringTools: string[] = [''];
  selectedTools: any;

  measuringTools1: UtensilsList = {
    Cups: [
      {id: '1 cup', selected: true},
      {id: '1/2 cup', selected: true},
      {id: '1/3 cup', selected: true},
      {id: '1/4 cup', selected: true},
    ],
    Tablespoons: [
      {id: '1 Tblsp', selected: true},
      {id: '1/2 Tblsp', selected: true},
      {id: '1/3 Tblsp', selected: true},
      {id: '1/4 Tblsp', selected: true},
    ],
    Teaspoons: [
      {id: '1 Tsp', selected: true},
      {id: '1/2 Tsp', selected: true},
      {id: '1/3 Tsp', selected: true},
      {id: '1/4 Tsp', selected: true},
    ]
  }

  

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.sharedMessage$.subscribe((value) => {
      this.selectedTools = value
    })
  }

  addServingInput() {
    this.measuringTools.push('')
  }

}
