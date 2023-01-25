import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {
  @Output() newMeasurerEvent = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewMeasurer($event: Event) {
    this.newMeasurerEvent.emit($event)
    console.log($event)
  }

}
