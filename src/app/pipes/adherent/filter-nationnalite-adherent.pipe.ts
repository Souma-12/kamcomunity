import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNationnaliteAdherent'
})
export class FilterNationnaliteAdherentPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const nationnaliteTest = it.nationnalite.toString().toLowerCase().includes(value.toLowerCase());
      return (nationnaliteTest);
    });
  }

}


