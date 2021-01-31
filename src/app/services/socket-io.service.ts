import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
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
    this.socket.on('chat message', function (msg) {
      var item = document.createElement('li');
      item.textContent = msg;
      this.messages.appendChild(item);
    })
  }
  constructor() { }
}
