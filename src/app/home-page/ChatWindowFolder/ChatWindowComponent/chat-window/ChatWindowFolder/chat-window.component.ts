import { Component, OnInit } from '@angular/core';
import { SocketIoService } from 'src/app/services/socket-io.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  item:any;
  chatRoom = document.getElementById('messages');
  messageForm = {
    message: ''
  }
  chatMessages: any;

  constructor(private mySocketIoService: SocketIoService) { }

  onSendMsg() {
    this.mySocketIoService.emit('msg', this.messageForm.message);
    this.messageForm = {
      message: ''
    };
  }


  ngOnInit(): void {
    this.mySocketIoService.listen('msg').subscribe((data) => {
      this.item = document.createElement('li');
      this.item.textContent  = data;
      this.chatMessages = document.getElementById('messages');
      document.getElementById('messages').appendChild(this.item);
      this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    })
  }
}
