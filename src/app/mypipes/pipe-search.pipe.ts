import { Pipe, PipeTransform } from '@angular/core';
import { InputService } from '../services/input.service';



@Pipe({
  name: 'pipeSearch'
})
export class PipeSearchPipe implements PipeTransform {
  constructor(public srv: InputService) {
    console.log('cons');
    

  }
 

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) return [];
    return items.filter(item => {
      return item.toLowerCase().startsWith(searchText.toLowerCase());
    });
  }
}
