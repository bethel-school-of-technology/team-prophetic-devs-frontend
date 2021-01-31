import { Component, OnInit } from '@angular/core';
import { SocketIoService } from 'src/app/services/socket-io.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  value = ''
  constructor(private mySocketIoService: SocketIoService) { }
  messages = this.mySocketIoService.messages;
  input = this.mySocketIoService.input;
  form = this.mySocketIoService.form;

  sendMessage(){
    this.mySocketIoService.onSendMessage()
  }

  ngOnInit(): void {
    this.mySocketIoService.setupSocketConnection();
  }

}
