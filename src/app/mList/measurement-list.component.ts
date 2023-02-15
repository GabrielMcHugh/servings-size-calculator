import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss'],
})
export class MeasurementListComponent implements OnInit {
  prevSelected: string = ''
  selected: string = ''
  utlList: any

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sharedService.selectedUtensilList$.subscribe((value) => {
      this.utlList = value
    })
  }

  onSelectedUtensil() {
    this.sharedService.setUtensil({utensil: this.selected, prevUtensil: this.prevSelected})
    this.prevSelected = this.selected
  }

  trackFn(index: any, tool: {id: string, selected: boolean}): string {
    const uID = tool.id + tool.selected.toString()
    return uID
  }

}
