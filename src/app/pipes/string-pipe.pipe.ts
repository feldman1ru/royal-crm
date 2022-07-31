import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCapital',
})
export class TextCapitalPipe implements PipeTransform {
  transform(text: string): string {
    const trimmed = text.trim();
    return (
      trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLocaleLowerCase()
    );
  }
}
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'stringPipe'
// })
// export class StringPipePipe implements PipeTransform {

//   // transform(word:string){
  
//   //    let string = word.split(" ");
//   //    let newstring = '';

//   //     for (let i = 0; i < string.length; i++) {
//   //       string[i] = string[i].trim();
//   //       console.log();
        
//   //       string[i] = string[i][0].toUpperCase() + string[i].substr(1).toLowerCase();
//   //       newstring += string[i]+' ';
//   //     }
//   //     return newstring;
//   // }

//   transform(text: string): string {
//     const trimmed = text.trim();
//     return (
//       trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLocaleLowerCase()
//     );
//   }

// }
