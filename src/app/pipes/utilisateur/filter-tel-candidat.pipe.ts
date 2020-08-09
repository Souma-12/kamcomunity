import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTelUtilisateur'
})
export class FilterTelUtilisateurPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const result = it.tel.toString().toLowerCase().includes(value.toLowerCase());
      return (result);
    });
  }

}
