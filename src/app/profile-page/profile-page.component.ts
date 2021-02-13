import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { SocketIoService } from '../services/socket-io.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  events: Event[] = []
  posts: Post[] = []

  postForm = {
    title: "",
    postBody: "",
    name: "",
    email:""
  }

  onPost(){
    console.log("Post Submitted");
    console.log(this.postForm);
    this.myPostService.creatPost(this.postForm.title, this.postForm.postBody, this.postForm.name, this.postForm.email)
      .subscribe(res => {
        console.log(res)
        this.postForm = {
          title: "",
          postBody: "",
          name:"",
          email:""
        }
      })
  }


  constructor(private myEventService: EventService, public dialog: MatDialog, public myPostService: PostService, private mySocketIoService: SocketIoService) { }

  ngOnInit(): void {
    this.myEventService.getAllEvents().subscribe(res=>{
      console.log(res)
      this.events=res;
    });

    this.myPostService.getAllPosts().subscribe(res => {
      console.log(res)
      this.posts=res;
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

