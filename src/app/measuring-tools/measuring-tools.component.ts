import { Component, OnInit } from '@angular/core';
import { MeasuringTools } from './MeasuringTools';

@Component({
  selector: 'app-measuring-tools',
  templateUrl: './measuring-tools.component.html',
  styleUrls: ['./measuring-tools.component.scss']
})
export class MeasuringToolsComponent implements OnInit {

  measuringTools: MeasuringTools = {
    cups: ['1', '1/2', '1/3', '1/4'],
    tablespoons: ['1', '1/2', '1/3', '1/4'],
    teaspoons: ['1', '1/2', '1/3', '1/4'],
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}