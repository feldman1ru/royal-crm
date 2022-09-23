import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consollog'
})
export class ConsollogPipe implements PipeTransform {

  transform(value:any) {
    console.log(value);
    
  }

}
