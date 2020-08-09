import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitreUtilisateur'
})
export class FilterTitreUtilisateurPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const result = it.titre.toString().toLowerCase().includes(value.toLowerCase());
      return (result);
    });
  }

}
