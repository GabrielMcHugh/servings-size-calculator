import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measure-input',
  templateUrl: './measure-input.component.html',
  styleUrls: ['./measure-input.component.scss']
})
export class MeasureInputComponent implements OnInit {
  measuringTools: string[] = [''];
  selectedTools: any;
  volume: number = 0;

  utensilsList = [
    '1 cup',
    '1/2 cup',
    '1/3 cup',
    '1/4 cup',
    '1 Tblsp',
    '1/2 Tblsp',
    '1/3 Tblsp',
    '1/4 Tblsp',
    '1 Tsp',
    '1/2 Tspn',
    '1/3 Tspn',
    '1/4 Tspn',
  ]

  
  constructor() { }

  ngOnInit(): void {
  }

}
