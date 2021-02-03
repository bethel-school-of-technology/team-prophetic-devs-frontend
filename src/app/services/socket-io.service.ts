import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  constructor(private socket: Socket) { }

  userConnect() {
    console.log('Socket should be connected...')
    return this.socket.connect()
  }

  sendMessage(msg: string) {
    return this.socket.emit("message", msg);
  }
  getMessage() {
    return this.socket
      .fromEvent("message")
      .pipe(map((data) => data/*This throws an error >>> .msg*/));
  }

  sendMsg() {
    return this.socket.on('message', ()=>{
      this.socket.emit("message", "HELLO WORLD");
    })
  }
}
