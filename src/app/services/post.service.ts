import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  //Gets the Users ID so the email so the post is associated with the correct account.
  userEmail:any;
  configUrl = 'http://localhost:5000/api/posts/getUserEmail';


  //function for getting the email
  // getEmail(): Observable<any> {
  //   return this.http.get(this.configUrl, {
  //     headers: {
  //       authorization: localStorage.getItem('VIP Pass')
  //     }
  //   })
  // }

  // //loads email into local variable for use.
  // loadEmail(){
  //   this.getEmail()
  //   .pipe()
  //   .subscribe((res:any) => {
  //     console.log(res.responseGroupie.email);
  //     this.userEmail = res.responseGroupie.email;
  //   })
  // }


  creatPost(title: string, postBody: string){
    const post: Post = {
      title: title,
      postBody: postBody,
    }
    return this.http.post('http://localhost:5000/api/posts/createPost', post, {
      headers: {
        authorization: localStorage.getItem('VIP Pass')
      }
    })
  }
}
