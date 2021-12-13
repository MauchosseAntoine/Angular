import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { postsMock } from '../data/posts.mock';
import { Post } from '../models/post.interface';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: Post[] = postsMock
  post?: Post;
  slug!: string;
  constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiServiceService) {}

  ngOnInit(): void {
   
    this.apiService.getData().subscribe(
      (rep) => {
        this.posts = rep;
        // this.post = this.posts.find((post) => post.slug === this.route.snapshot.params['slug']);

        this.route.params.subscribe(params => {
          this.post = this.posts.find((post) => post.slug === params['slug']);
        });
        
      }
    ); 
  
  }

}
