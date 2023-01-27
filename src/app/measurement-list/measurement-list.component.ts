import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MeasuringTools } from '../measuring-tools/MeasuringTools';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {

  @Input() tools: MeasuringTools = {
    cups: [],
    tablespoons: [],
    teaspoons: []
  };
  @Output() newMeasurerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewMeasurer(option: string) {
    this.newMeasurerEvent.emit(option)
    console.log(option)
  }

}
