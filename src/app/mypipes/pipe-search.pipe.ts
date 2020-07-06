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
    searchText = searchText.toLowerCase;
    return items.filter(it => {
      return it.toLowerCase().startsWith(searchText);
    });
  }
}
