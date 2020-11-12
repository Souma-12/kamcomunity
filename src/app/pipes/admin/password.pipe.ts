import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPasswordAdmin'
})
export class FilterPasswordAdminPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const passwordTest = it.password.toString().toLowerCase().includes(value.toLowerCase());
      return (passwordTest);
    });
  }

}
