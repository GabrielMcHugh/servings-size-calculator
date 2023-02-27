import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-measure-input',
  templateUrl: './measure-input.component.html',
  styleUrls: ['./measure-input.component.scss']
})
export class MeasureInputComponent implements OnInit {
  selectedTool: any;
  serves: number = 0;

  utensilsList = [
    { id: 'liters', volume: 1000},
    { id: 'milliliters', volume: 1},
    { id: '1 cup', volume: 236.588 },
    { id: '1/2 cup', volume: 118.294 },
    { id: '1/3 cup',volume: 78.86195687 },
    { id: '1/4 cup', volume: 59.14706 },

    { id: '1 Tblsp', volume: 14.7868 },
    { id: '1/2 Tblsp',  volume: 7.39338 },

    { id: '1 Tsp', volume: 4.92892 },
    { id: '1/2 Tsp', volume: 2.46446 },
    { id: '1/3 Tsp', volume: 1.642956904 },
    { id: '1/4 Tsp', volume: 1.23223 },
  ]

  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  setVolume(): void {
    let volume = 0
    this.utensilsList.some(x => {
      if (x.id === this.selectedTool) {
        volume = x.volume * this.serves
        return true
      } else return false
    })
    this.sharedService.setVolume(volume)
  }

}
