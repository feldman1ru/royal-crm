import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe'
})
export class StringPipePipe implements PipeTransform {

  transform(word:string){
  
     let string = word.split(" ");
     let newstring = '';

      for (let i = 0; i < string.length; i++) {
        string[i] = string[i][0].toUpperCase() + string[i].substr(1).toLowerCase();
        newstring += string[i]+' ';
      }
      return newstring;
  }

}
