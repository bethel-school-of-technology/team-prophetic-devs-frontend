import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  socket;

  messages = document.getElementById('messages');
  form = document.getElementById("form");
  input = document.getElementById("input");

  onSendMessage(){
    if (this.input.nodeValue) {
      this.socket.emit('chat message', this.input.nodeValue);
      this.input.nodeValue = '';
    }
  }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.on('connect', function (msg) {
      console.log(msg);
    })
  }
  constructor() { }
}
