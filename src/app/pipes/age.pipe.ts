import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  
  transform(value: any): number {

    let val = new Date(value).getFullYear();
    let todey = new Date().getFullYear();
    let age = (todey - val);
    return age
}
}

