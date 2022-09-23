import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {
  
transform(value: any): any {
  let val = new Date(value).getFullYear();
  let today = new Date().getFullYear();
  let age = (today - val);
  return age
}
}
