import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../models/post.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor( private httpClient: HttpClient) { }

  getData():Observable<Post[]>{
    return this.httpClient.get<any>('http://localhost:3001/posts');
  }
}
