import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDescriptionDon'
})
export class FilterDescriptionDonPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const descriptionTest = it.description.toString().toLowerCase().includes(value.toLowerCase());
      return (descriptionTest);
    });
  }

}