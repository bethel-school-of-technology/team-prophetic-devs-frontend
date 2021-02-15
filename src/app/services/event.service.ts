import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  user:{};

  profileInfo(): Observable<any>{
    return this.http.get("http://ec2-54-174-209-56.compute-1.amazonaws.com/api/users/profile", {
      headers: {
        authorization: localStorage.getItem('VIP Pass')
      }
    });
  }

  getProfileInfo(): any {
    this.getProfileInfo()
    .pipe()
    .subscribe((response:any)=>{
      this.user = response.responseGroupie
      console.log(this.user);
    })
  }

  getAllEvents(): Observable<any>{
    return this.http.get("http://ec2-54-174-209-56.compute-1.amazonaws.com/api/events/getEvents");
  }
}
