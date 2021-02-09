import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  events: Event[] = []
  userEmail = this.myPostService.userEmail;


  postForm = {
    title: "",
    postBody: ""
  }

  onPost(){
    console.log("Post Submitted");
    console.log(this.postForm);
    this.myPostService.creatPost(this.postForm.title, this.postForm.postBody)
      .subscribe(res => {
        console.log(res)
        this.postForm = {
          title: "",
          postBody: ""
        }
      })
  }


  constructor(private myEventService: EventService, public dialog: MatDialog, public myPostService: PostService) { }

  ngOnInit(): void {
    this.myEventService.getAllEvents().subscribe(res=>{
      console.log(res)
      this.events=res;
    });
  }
  getInfo(evt:Event) {
    this.dialog.open(EventDialogComponent, {
      data: {
        event: evt
      }
    });
  }

}

