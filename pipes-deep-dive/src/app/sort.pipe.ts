import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  pure: false
})
export class SortPipe implements PipeTransform {
  //Para ordenar un arreglo de elementos que cambian NO SE RECOMIENDA USAR ESTO O PIPES!!!!!
  transform(value: string[] | number[], direction: 'asc' | 'desc' = 'asc') {
    const sorted = [...value];
    sorted.sort((a, b)=>{
      if(direction === 'asc'){
        //Si a > b entonces retornara 1, si no -1
        return a>b ? 1:-1;
      }else{
        return a>b ? -1:1;
      }
    });
    return sorted;
  }

}
