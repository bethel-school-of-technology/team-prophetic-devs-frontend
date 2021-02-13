import { Component } from '@angular/core';
import { SocketIoService } from './services/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OpenMic';

  constructor(private mySocketIoService: SocketIoService) { }

  ngOnInit(): void {
    //Here we are wanting to listen to an event from socket.io server
    this.mySocketIoService.listen('test event').subscribe((data) => {
    })
  }
}
