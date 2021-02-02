import { Component, OnInit } from '@angular/core';
import { SocketIoService } from 'src/app/services/socket-io.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  value=""

  messageForm = {
    message: ''
  }

  onSendMessage(){
    this.mySocketIoService.sendMessage(this.messageForm.message);
    console.log(this.messageForm);
    this.messageForm = {
      message: ''
    }
  }

  constructor(private mySocketIoService: SocketIoService) { }
  ngOnInit(): void {
  }

}
