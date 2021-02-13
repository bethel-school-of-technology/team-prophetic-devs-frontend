import { Injectable } from '@angular/core';
import * as io from 'socket.io-client/dist/socket.io';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  //Getting User Information
  userName: any;
  configUrl = 'http://localhost:5000/api/socket/getUserName';

  //Socket Connection Stuff...
  socket: any;
  readonly uri: string = "http://localhost:5000";


  constructor(private http: HttpClient) {
    this.socket = io(this.uri);
    this.showConfig();
  }

  getUsername(): Observable<any> {
    return this.http.get(this.configUrl, {
      headers: {
        authorization: localStorage.getItem('VIP Pass')
      }
    });
  }
  showConfig() {
    this.getUsername()
      .pipe()
      .subscribe((response: any) => {
        console.log(response.responseGroupie.username);
        this.userName = response.responseGroupie.username;
      });
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        console.log(data);
        subscriber.next(data)
      })
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, (this.userName + ": " + data));
  }

}
