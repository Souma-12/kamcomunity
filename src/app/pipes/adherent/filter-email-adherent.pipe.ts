import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEmailAdherent'
})
export class FilterEmailAdherentPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const emailTest = it.email.toString().toLowerCase().includes(value.toLowerCase());
      return (emailTest);
    });
  }

}

