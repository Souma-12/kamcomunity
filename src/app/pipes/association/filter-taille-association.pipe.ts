import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTailleAssociation'
})
export class FilterTailleAssociationPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const tailleTest = it.taille.toString().toLowerCase().includes(value.toLowerCase());
      return (tailleTest);
    });
  }

}
