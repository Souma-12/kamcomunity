import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterIdAssociationDon'
})
export class FilterIdAssociationDonPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const idTest = it.id.toString().toLowerCase().includes(value.toLowerCase());
      return (idTest);
    });
  }


}