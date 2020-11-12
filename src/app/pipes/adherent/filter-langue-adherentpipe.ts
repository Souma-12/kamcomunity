import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLangueAdherent'
})
export class FilterLangueAdherentPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const langueTest = it.langue.toString().toLowerCase().includes(value.toLowerCase());
      return (langueTest);
    });
  }

}

