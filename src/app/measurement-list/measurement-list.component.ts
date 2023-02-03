import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtensilsList } from '../types/UtensilsList';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {

  @Input() tools!: UtensilsList;
  @Output() newMeasurerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewMeasurer(option: string) {
    this.newMeasurerEvent.emit(option)
    console.log(option)
  }

}
