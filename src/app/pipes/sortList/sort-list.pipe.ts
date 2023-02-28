import { Pipe, PipeTransform } from '@angular/core';
import { UtensilsList } from 'src/app/types/UtensilsList';

@Pipe({
  name: 'sortList'
})
export class SortListPipe implements PipeTransform {

  transform(value: {uID: number, order: number}[], ...args: unknown[]): {uID: number, order: number}[] {
    console.log('sorting taking place')
    return value.sort((a, b) => a.order - b.order);
  }

}
