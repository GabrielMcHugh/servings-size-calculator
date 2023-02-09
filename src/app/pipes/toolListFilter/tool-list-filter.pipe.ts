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
  private filteredTools: string[] = []
  private prevTools: Utensils | undefined;

  constructor(private shallowEqualityService: ShallowEqualityService) { }

  transform(tools: Utensils): string[] {
    console.log('tools', tools, '\nprev tools\n', this.prevTools)
    if (!tools) return [];

    //Object comparison
    if (this.shallowEqualityService.shallowEqual(tools, this.prevTools)) {
      return this.filteredTools
    }

    this.prevTools = Object.assign({}, tools)
    this.filteredTools = Object.keys(tools).filter(key => tools[key] === true)

    return this.filteredTools
  }

}
