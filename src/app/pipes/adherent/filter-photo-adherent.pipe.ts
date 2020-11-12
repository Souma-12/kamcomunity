import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPhotoAdherent'
})
export class FilterPhotoAdherentPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const photoTest = it.photo.toString().toLowerCase().includes(value.toLowerCase());
      return (photoTest);
    });
  }

}
