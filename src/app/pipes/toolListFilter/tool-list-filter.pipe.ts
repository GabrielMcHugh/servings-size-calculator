import { Pipe, PipeTransform } from '@angular/core';
import { ShallowEqualityService } from 'src/app/services/utils/shallow-equality.service';
import { Utensils, UtensilsList } from 'src/app/types/UtensilsList';

@Pipe({
  name: 'toolListFilter',
  pure: false,
})

/**
 * Accepts a Utensils Object and filters out all entries that are false
 * and returns an array of remaining keys
 */
export class ToolListFilterPipe implements PipeTransform {
  //caching values to save time on recalc
  private prevTools: Utensils | undefined;
  private latestTools: Utensils | undefined;

  constructor(private shallowEqualityService: ShallowEqualityService) {}

  transform(tools: Utensils): string[] {
    //Needs some logic to deal with prev or latest being null

    //Object comparison
    if (this.shallowEqualityService.shallowEqual(this.prevTools, this.latestTools))

    if (!tools) return [];

    let result = Object.keys(tools).filter(key => tools[key] === true)

    return result
  }

}
