import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNomUtilisateur'
})
export class FilterNomUtilisateurPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const result = it.nom.toString().toLowerCase().includes(value.toLowerCase());
      return (result);
    });
  }

}
