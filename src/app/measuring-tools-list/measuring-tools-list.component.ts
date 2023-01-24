import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-measuring-tools-list',
  templateUrl: './measuring-tools-list.component.html',
  styleUrls: ['./measuring-tools-list.component.scss']
})
export class MeasuringToolsListComponent implements OnInit {

  array: number[];

  constructor() {
    this.array = [1]
  }

  ngOnInit(): void {
  }

  addServingInput() {
    this.array.push(this.array.length + 1)
  }

}
