import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  userEmail:any;
  configUrl = 'http://localhost:5000/api/posts/';


  getAllPosts(): Observable<any>{
    return this.http.get(`${this.configUrl}getPosts`, {
      headers: {
        authorization: localStorage.getItem('VIP Pass')
      }
    })
  }

  creatPost(title: string, postBody: string, name: string, email: string){
    const post: Post = {
      title: title,
      postBody: postBody,
      name: name,
      email: email
    }
    return this.http.post(`${this.configUrl}createPost`, post, {
      headers: {
        authorization: localStorage.getItem('VIP Pass')
      }
    })
  }
}
