import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterModificationAssociation'
})
export class FilterModificationAssociationPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const modifTest = it.dateModif.toString().toLowerCase().includes(value.toLowerCase());
      return (modifTest);
    });
  }

}