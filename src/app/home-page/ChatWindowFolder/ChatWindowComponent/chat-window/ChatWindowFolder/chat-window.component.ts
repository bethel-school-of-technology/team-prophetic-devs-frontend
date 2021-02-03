import { Component, OnInit } from '@angular/core';
import { SocketIoService } from 'src/app/services/socket-io.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  value = ""
  item = document.createElement('li');
  messageForm = {
    message: ''
  }

  onSendMessage() {
    this.mySocketIoService.sendMessage(this.messageForm.message);
    console.log(this.messageForm);
    this.item.textContent = this.messageForm.message;
    document.getElementById('messages').appendChild(this.item);
    window.scrollTo(0, document.body.scrollHeight);
    this.messageForm = {
      message: ''
    };
  }

  constructor(private mySocketIoService: SocketIoService) { }
  ngOnInit(): void {
    this.mySocketIoService.userConnect();
  }

}
