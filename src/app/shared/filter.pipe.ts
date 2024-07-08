import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTitle',
})
export class FilterPipe implements PipeTransform {
  // transform(value: any[], filterString: string, propName: string): any[] {
  //   const result: any = [];
  //   if (!value || filterString === '' || propName === '') {
  //     return value;
  //   }
  //   value.forEach((title: any) => {
  //     if (
  //       title[propName]
  //         .trim()
  //         .toLowerCase()
  //         .includes(filterString.toLowerCase())
  //     ) {
  //       result.push(title);
  //     }
  //   });
  //   return result;
  //}

  transform(value: any, filterString: any[]): any {
    if (!value) return [];
    if (!filterString) return value;
    return null;
  }
}
