import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-selector',
  templateUrl: './chat-selector.component.html',
  styleUrls: ['./chat-selector.component.css']
})
export class ChatSelectorComponent implements OnInit {

  selected = ""
  constructor() { }

  ngOnInit(): void {
  }

}
