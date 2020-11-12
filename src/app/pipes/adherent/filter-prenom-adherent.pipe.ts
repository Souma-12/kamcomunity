import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrenomAdherent'
})
export class FilterPrenomAdherentPipe implements PipeTransform {

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

