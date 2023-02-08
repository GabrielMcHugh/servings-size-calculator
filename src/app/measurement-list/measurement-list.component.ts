import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UtensilsList } from '../types/UtensilsList';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {
  selected: string = '';

  @Input() tools!: UtensilsList;
  @Output() newMeasurerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewMeasurer() {
    this.newMeasurerEvent.emit(this.selected)
    console.log(this.selected)
  }

}
