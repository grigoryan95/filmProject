import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'fillter'
})
export class FillterPipe implements PipeTransform {

  transform(postsCard: any, search: string = ''): any {
    if (!search.trim()){
      return postsCard
    }else{
      return postsCard.filter( (p: { title: string; }) => {
        return p.title.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}

