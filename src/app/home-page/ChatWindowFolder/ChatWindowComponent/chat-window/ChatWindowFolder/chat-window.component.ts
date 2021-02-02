import { Component, OnInit } from '@angular/core';
import { SocketIoService } from 'src/app/services/socket-io.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  value: string = '';
  message: string = '';

  onSendMessage(){
    this.mySocketIoService.sendMessage(this.message)
  }

  constructor(private mySocketIoService: SocketIoService) { }
  ngOnInit(): void {
    this.mySocketIoService.userConnected();
  }

}
