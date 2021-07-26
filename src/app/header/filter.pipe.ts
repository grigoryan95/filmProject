import { Pipe, PipeTransform} from '@angular/core';
import {Post} from "../home/home.service";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(postsCard: Post[], search: string = ''): Post[] {
    if (!search.trim()){
      return postsCard
    }else{
      return postsCard.filter( p => {
        return p.title.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
