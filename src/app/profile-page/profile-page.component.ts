import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  events: Event[] = []
  constructor(private myEventService: EventService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.myEventService.getAllEvents().subscribe(res=>{
      console.log(res)
      this.events=res;
    })
  }
  getInfo(evt:Event) {
    this.dialog.open(EventDialogComponent, {
      data: {
        event: evt
      }
    });
  }

}

