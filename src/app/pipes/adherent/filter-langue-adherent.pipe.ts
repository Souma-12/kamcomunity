import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLanguePipe'
})
export class FilterLanguePipePipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) {
        return [];
    }
    if (!value) {
        return items;
    }
    return items.filter(it => {
        const langues = it.langues.toString().toLowerCase().includes(value.toLowerCase());
        return (langues);
    });

}}
