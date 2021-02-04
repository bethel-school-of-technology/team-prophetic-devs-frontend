import { Component, OnInit } from '@angular/core';
import { SocketIoService } from 'src/app/services/socket-io.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  item = document.createElement('li');
  chatRoom = document.getElementById('messages');
  messageForm = {
    message: ''
  }

  constructor(private mySocketIoService: SocketIoService) { }

  onSendMsg() {
    this.mySocketIoService.emit('msg', this.messageForm.message);
    this.messageForm = {
      message: ''
    };
  }


  ngOnInit(): void {
    this.mySocketIoService.listen('msg').subscribe((data) => {
      this.item.textContent = data; //Don't worry about this error!!!!
      document.getElementById('messages').appendChild(this.item);
      window.scrollTo(0, document.body.scrollHeight);
    })
  }
}
