import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAjoutAdherent'
})
export class FilterAjoutAdherentPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const ajoutTest = it.ajout.toString().toLowerCase().includes(value.toLowerCase());
      return (ajoutTest);
    });
  }

}

