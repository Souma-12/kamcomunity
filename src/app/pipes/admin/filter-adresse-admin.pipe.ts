import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAdresseAdmin'
})
export class FilterAdresseAdminPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const adresseTest = it.adresse.toString().toLowerCase().includes(value.toLowerCase());
      return (adresseTest);
    });
  }

}

