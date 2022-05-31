import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPercent'
})
export class DiscountPercentPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+"% OFF";
  }

}
