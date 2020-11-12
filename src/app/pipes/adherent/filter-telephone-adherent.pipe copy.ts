import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTelephoneAdherent'
})
export class FilterTelephoneAdherentPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const telephoneTest = it.telephone.toString().toLowerCase().includes(value.toLowerCase());
      return (telephoneTest);
    });
  }

}

