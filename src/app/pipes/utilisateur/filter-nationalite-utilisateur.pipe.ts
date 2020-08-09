import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNationaliteUtilisateur'
})
export class FilterNationaliteUtilisateurPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const result = it.nationalite.toString().toLowerCase().includes(value.toLowerCase());
      return (result);
    });
  }

}
