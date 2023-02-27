import { Pipe, PipeTransform } from '@angular/core';
import { UtensilsList } from 'src/app/types/UtensilsList';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(value: UtensilsList, ...args: unknown[]): UtensilsList {
    return value.filter(x => x.selected === true).sort((a, b) => a.order - b.order);
  }

}
