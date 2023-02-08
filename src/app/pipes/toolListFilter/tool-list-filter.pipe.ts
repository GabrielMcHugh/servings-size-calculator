import { Pipe, PipeTransform } from '@angular/core';
import { Utensils } from 'src/app/types/UtensilsList';

@Pipe({
  name: 'toolListFilter'
})
export class ToolListFilterPipe implements PipeTransform {

  transform(tools: Utensils): string[] {
    if (!tools) return [];

    let result = Object.keys(tools).filter(key => tools[key] === true)

    return result
  }

}
