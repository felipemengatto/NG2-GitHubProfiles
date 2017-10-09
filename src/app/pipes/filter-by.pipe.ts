import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(value.length === 0 || args === undefined){
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(
      val => val.name.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

}
