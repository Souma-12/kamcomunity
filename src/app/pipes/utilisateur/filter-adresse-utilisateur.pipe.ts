import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAdresseUtilisateur'
})
export class FilterAdresseUtilisateurPipe implements PipeTransform {
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
