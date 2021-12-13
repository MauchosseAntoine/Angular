import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(items: Post[], post?: Post): Post[] {
    
    return items.filter(x => x.slug != post?.slug);
  }

}
