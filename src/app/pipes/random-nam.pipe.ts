import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomNam'
})
export class RandomNamPipe implements PipeTransform {

  transform(value: number, ...args: number[]) {

    if(args.length === 0){
       return Math.floor(Math.random() * (value - 0 + 1) + 0)  
    }
    
    if(args.length === 1){
      return Math.floor(Math.random() * (value - args[0] + 1) + args[0])
      
    }
    return 0
    
  }

}
