import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm = {
    email: "",
    password: "",
  }
  onLogIn() {
    console.log("LogIn form submitted");
    this.myUserService.logIn(this.loginForm.email, this.loginForm.password)
      .subscribe(response => {
        console.log(response);
        //the alert below throws an error but works how i want it to.
        // alert(response.message);
        this.loginForm = {
          email: "",
          password: ""
        }
      })
  }

  constructor(private myUserService: UserService) { }

  ngOnInit(): void {
  }

}
