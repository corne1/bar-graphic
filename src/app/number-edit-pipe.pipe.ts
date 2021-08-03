import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberEdit'
})
export class NumberEditPipe implements PipeTransform {

  transform(num: number): string {
    return Number(num.toFixed()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

}
