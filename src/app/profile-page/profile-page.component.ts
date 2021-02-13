import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  events: Event[] = []
  currentUser: any
  constructor(private myEventService: EventService, public dialog: MatDialog, private myUserService: UserService) { }

  ngOnInit(): void {
    this.myEventService.getAllEvents().subscribe(res => {
      console.log(res)
      this.events = res;
    })
    this.myUserService.getUserProfile().subscribe((myResponseObject:any) => {
      console.log(myResponseObject.responseGroupie.firstName);
      this.currentUser = {
        firstName: myResponseObject.responseGroupie.firstName,
        lastName: myResponseObject.responseGroupie.lastName,
        instruments: myResponseObject.responseGroupie.instruments,
        genres: myResponseObject.responseGroupie.genres,
        cityState: myResponseObject.responseGroupie.cityState,
      }
      //myResponseObject.responseGroupie;
    })
    console.log(this.currentUser);
  }
  getInfo(evt: Event) {
    this.dialog.open(EventDialogComponent, {
      data: {
        event: evt
      }
    });
  }

}

//line 13 under events//
// currentUser: User = new User ();
// constructor(private myUserService: UserService) { }