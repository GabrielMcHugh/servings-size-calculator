import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Utensils, UtensilsList } from '../types/UtensilsList';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss'],
})
export class MeasurementListComponent implements OnInit {
  prevSelected: string = ''
  selected: string = ''
  serves: number = 0
  uID: number;
  utlList: any

  @Output() setID = new EventEmitter<number>()
  @Output() removeItemEvent = new EventEmitter<string>()

  constructor(private sharedService: SharedService,) { 
    this.uID = Date.now() 
  }

  ngOnInit(): void {
    this.sharedService.selectedUtensilList$.subscribe((value) => {
      this.utlList = value
      this.updateServes(value as UtensilsList)
    })
    this.setID.emit(this.uID)
  }

  updateServes(value: UtensilsList) {
    value.forEach(x => {
      if (x.id === this.selected) {
        this.serves = x.serves
      }
    })
  }

  onSelectedUtensil() {
    this.sharedService.setUtensil({utensil: this.selected, prevUtensil: this.prevSelected, uID: this.uID})
    this.prevSelected = this.selected
  }

  //Must remove utensil from the list and trigger recalculation of measuring list
  removeUtensil() {
    console.log('remove Utensil', this.selected)
    this.removeItemEvent.emit(this.selected)
  }

}
