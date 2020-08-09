import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPaysAssociation'
})
export class FilterPaysAssociationPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const paysTest = it.pays.toString().toLowerCase().includes(value.toLowerCase());
      return (paysTest);
    });
  }

}