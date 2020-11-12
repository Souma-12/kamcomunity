import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterModifAdmin'
})
export class FilterModifAdminPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const modifTest = it.modif.toString().toLowerCase().includes(value.toLowerCase());
      return (modifTest);
    });
  }

}

