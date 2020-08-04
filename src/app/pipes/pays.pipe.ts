import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pays'
})
export class PaysPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
