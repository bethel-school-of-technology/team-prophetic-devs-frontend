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
  }

  getUsername() {
    return this.http.get(this.configUrl);
  }
  showConfig() {
    this.getUsername()
      .pipe()
      .subscribe((response: any) => this.userName = {
        username: response.username
      });
    console.log(this.userName);
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => {
        subscriber.next(data)
      })
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
    console.log(data);
  }

}
