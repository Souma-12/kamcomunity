import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrenomAdmin'
})
export class FilterPrenomAdminPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const prenomTest = it.prenom.toString().toLowerCase().includes(value.toLowerCase());
      return (prenomTest);
    });
  }

}

