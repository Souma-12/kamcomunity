import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAjoutUtilisateur'
})
export class FilterAjoutUtilisateurPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const result = it.dateAjout.toString().toLowerCase().includes(value.toLowerCase());
      return (result);
    });
  }

}
