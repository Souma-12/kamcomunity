import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNomAssociation'
})
export class FilterNomAssociationPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const nomTest = it.nom.toString().toLowerCase().includes(value.toLowerCase());
      return (nomTest);
    });
  }

}