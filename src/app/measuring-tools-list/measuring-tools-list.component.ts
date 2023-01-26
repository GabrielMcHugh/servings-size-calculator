import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-measuring-tools-list',
  templateUrl: './measuring-tools-list.component.html',
  styleUrls: ['./measuring-tools-list.component.scss']
})
export class MeasuringToolsListComponent implements OnInit {

  measuringTools: string[];
  @Input() utensils: [] = [];

  constructor() {
    this.measuringTools = ['']
  }

  ngOnInit(): void {
  }

  addServingInput() {
    this.measuringTools.push('')
  }

}
