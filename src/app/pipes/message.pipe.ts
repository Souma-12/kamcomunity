import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'message'
})
export class MessagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
