import { Component, OnInit } from '@angular/core';
import { MeasuringTools } from '../measuring-tools/MeasuringTools';

@Component({
  selector: 'app-measure-input',
  templateUrl: './measure-input.component.html',
  styleUrls: ['./measure-input.component.scss']
})
export class MeasureInputComponent implements OnInit {

  measuringTools: MeasuringTools = {
    cups: ['1', '1/2', '1/3', '1/4'],
    tablespoons: ['1', '1/2', '1/3', '1/4'],
    teaspoons: ['1', '1/2', '1/3', '1/4'],
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
