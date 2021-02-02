import { Injectable } from '@angular/core';
import { Socket }  from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  constructor(private socket: Socket) { }

  userConnected(){
    this.socket.emit('message', "user has connected.");
  }

  sendMessage(msg: string){
    this.socket.emit('chat message', msg);
    console.log('Message succesfully sent.')
  };

  getMessage(){
    return this.socket
      .fromEvent('message')
      .pipe(map((data) => {data}));
  }
}
