import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../services/socket-io.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private mySocketIoService: SocketIoService) { }

  //Socket Io Stuff Here


  ngOnInit(): void {
  }

}
