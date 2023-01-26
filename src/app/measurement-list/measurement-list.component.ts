import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {
  @Output() newMeasurerEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewMeasurer(option: string) {
    this.newMeasurerEvent.emit(option)
    console.log(option)
  }

}
