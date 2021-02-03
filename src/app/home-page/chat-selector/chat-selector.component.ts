import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../../services/socket-io.service';

@Component({
  selector: 'app-chat-selector',
  templateUrl: './chat-selector.component.html',
  styleUrls: ['./chat-selector.component.css']
})
export class ChatSelectorComponent implements OnInit {

  selected = ""

  onSendMsg(){
    this.mySocketIoService.sendMsg();
    console.log('The BUTTon was touched...')
}

  constructor(private mySocketIoService: SocketIoService) { }

  ngOnInit(): void {
  }

}
