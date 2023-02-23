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
  utlList: any

  @Output() removeItemEvent = new EventEmitter<string>()

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.selectedUtensilList$.subscribe((value) => {
      this.utlList = value
      this.updateServes(value as UtensilsList)
    })
  }

  updateServes(value: UtensilsList) {
    value.forEach(x => {
      if (x.id === this.selected) {
        this.serves = x.serves
      }
    })
  }

  onSelectedUtensil() {
    this.sharedService.setUtensil({utensil: this.selected, prevUtensil: this.prevSelected})
    this.prevSelected = this.selected
  }

  //Must remove utensil from the list and trigger recalculation of measuring list
  removeUtensil() {
    console.log('remove Utensil', this.selected)
    this.removeItemEvent.emit(this.selected)
  }

}
