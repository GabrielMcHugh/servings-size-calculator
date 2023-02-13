import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {
  selected: string = '';

  @Input() tools!: UtensilsList;
  @Output() newMeasurerEvent = new EventEmitter<string>();

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  onSelectedUtensil(utensil: string) {
    this.sharedService.nextMessage(utensil)
  }

  addNewMeasurer(value: string) {
    console.log(value)
    this.newMeasurerEvent.emit(this.selected)
    console.log(this.selected)
  }

}
