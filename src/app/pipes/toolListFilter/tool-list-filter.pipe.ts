import { Pipe, PipeTransform } from '@angular/core';
import { ShallowEqualityService } from 'src/app/services/utils/shallow-equality.service';
import { Utensils } from 'src/app/types/UtensilsList';

@Pipe({
  name: 'toolListFilter',
  pure: false
})

/**
 * Accepts a Utensils Object and filters out all entries that are false
 * and returns an array of remaining keys
 */
export class ToolListFilterPipe implements PipeTransform {


  constructor() { }

  transform(tools: [{id: string, selected: boolean}]) {
    return tools.filter(x => x.selected === true)
  }

}
