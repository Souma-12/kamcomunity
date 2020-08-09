import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterModifUtilisateur'
})
export class FilterModifUtilisateurPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const result = it.dateModif.toString().toLowerCase().includes(value.toLowerCase());
      return (result);
    });
  }

}
