import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
<<<<<<< HEAD
import { UserService } from '../services/user.service';
=======
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { SocketIoService } from '../services/socket-io.service';
>>>>>>> eb7a7b3336b18811aeead06745836ebf0a12b144

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  events: Event[] = []
<<<<<<< HEAD
  currentUser: any
  constructor(private myEventService: EventService, public dialog: MatDialog, private myUserService: UserService) { }
=======
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
>>>>>>> eb7a7b3336b18811aeead06745836ebf0a12b144

  ngOnInit(): void {
    this.myEventService.getAllEvents().subscribe(res => {
      console.log(res)
<<<<<<< HEAD
      this.events = res;
=======
      this.events=res;
    });

    this.myPostService.getAllPosts().subscribe(res => {
      console.log(res)
      this.posts=res;
>>>>>>> eb7a7b3336b18811aeead06745836ebf0a12b144
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
<<<<<<< HEAD
  getInfo(evt: Event) {
=======



  getInfo(evt:Event) {
>>>>>>> eb7a7b3336b18811aeead06745836ebf0a12b144
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