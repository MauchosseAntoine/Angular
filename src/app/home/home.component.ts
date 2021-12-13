import { Component, OnInit } from '@angular/core';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { ApiServiceService} from '../service/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  posts: Post[] = postsMock
  isLoad: boolean = false;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.isLoad = true;
    this.apiService.getData().subscribe(
      (rep) => {
        this.posts = rep;
        this.isLoad = false;
      }
    );
  }

}
