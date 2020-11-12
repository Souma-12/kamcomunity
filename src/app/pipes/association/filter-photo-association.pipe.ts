import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPhotoAssociation'
})
export class FilterPhotoAssociationPipe implements PipeTransform {

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
