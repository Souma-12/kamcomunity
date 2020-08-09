import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSiteAssociation'
})
export class FilterSiteAssociationPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const siteTest = it.site.toString().toLowerCase().includes(value.toLowerCase());
      return (siteTest);
    });
  }

}
