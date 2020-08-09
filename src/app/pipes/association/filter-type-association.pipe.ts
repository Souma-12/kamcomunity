import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTypeAssociation'
})
export class FilterTypeAssociationPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const typeTest = it.type.toString().toLowerCase().includes(value.toLowerCase());
      return (typeTest);
    });
  }

}
