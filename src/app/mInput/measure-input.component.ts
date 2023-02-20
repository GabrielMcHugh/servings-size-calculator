import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-measure-input',
  templateUrl: './measure-input.component.html',
  styleUrls: ['./measure-input.component.scss']
})
export class MeasureInputComponent implements OnInit {
  selectedTool: any;
  volume: number = 0;

  utensilsList = [
    '1 cup',
    '1/2 cup',
    '1/3 cup',
    '1/4 cup',
    '1 Tblsp',
    '1/2 Tblsp',
    '1/3 Tblsp',
    '1/4 Tblsp',
    '1 Tsp',
    '1/2 Tspn',
    '1/3 Tspn',
    '1/4 Tspn',
  ]

  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  setVolume(): void {
    this.sharedService.setVolume(this.volume)
  }

}
