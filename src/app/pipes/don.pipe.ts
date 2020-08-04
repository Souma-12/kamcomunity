import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'don'
})
export class DonPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
