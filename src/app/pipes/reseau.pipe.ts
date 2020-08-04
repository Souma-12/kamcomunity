import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reseau'
})
export class ReseauPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
