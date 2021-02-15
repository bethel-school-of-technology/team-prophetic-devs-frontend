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
    return this.http.get("/backend/api/users/profile", {
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
    return this.http.get("/backend/api/events/getEvents");
  }
}
