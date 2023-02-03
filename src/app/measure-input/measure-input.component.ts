import { Component, OnInit } from '@angular/core';
import { UtensilsList } from '../types/UtensilsList';

@Component({
  selector: 'app-measure-input',
  templateUrl: './measure-input.component.html',
  styleUrls: ['./measure-input.component.scss']
})
export class MeasureInputComponent implements OnInit {

  measuringTools: UtensilsList = {
    'Cups': {
      '1 cup': true,
      '1/2 cup': true,
      '1/3 cup': true,
      '1/4 cup': true,
    },
    'Tablespoons': {
      '1 Tblsp': true,
      '1/2 Tblsp': true,
      '1/3 Tblsp': true,
      '1/4 Tblsp': true,
    },
    'Teaspoons': {
      '1 Tsp': true,
      '1/2 Tsp': true,
      '1/3 Tsp': true,
      '1/4 Tsp': true,
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
