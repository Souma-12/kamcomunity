import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMontantDon'
})
export class FilterMontantDonPipe implements PipeTransform {

  transform(items: any[], value: any): any {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    return items.filter(it => {
      const montantTest = it.montant.toString().toLowerCase().includes(value.toLowerCase());
      return (montantTest);
    });
  }

}