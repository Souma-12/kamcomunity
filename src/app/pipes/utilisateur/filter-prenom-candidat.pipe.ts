import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPrenomUtilisateur'
})
export class FilterPrenomUtilisateurPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const result = it.prenom.toString().toLowerCase().includes(value.toLowerCase());
      return (result);
    });
  }

}
