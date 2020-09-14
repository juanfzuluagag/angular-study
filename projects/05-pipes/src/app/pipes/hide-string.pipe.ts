import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideString'
})
export class HideStringPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {
    return (activar) ? '*'.repeat(value.length) : value;
    /*
    if(activar){
      let returnString = '';
      for (let i = 0; i < value.length; i++) {
        returnString += '*';    
      }
        return returnString;
    }else{
      return value;
    }
    */
  }

}
