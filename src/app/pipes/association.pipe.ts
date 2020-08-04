import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'association'
})
export class AssociationPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
   
    return  value.length;
  }

}
