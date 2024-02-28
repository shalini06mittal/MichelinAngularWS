import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(value)
    if(args.length == 0)
      return value ** 2;
    return value ** args[0];
  }

}
