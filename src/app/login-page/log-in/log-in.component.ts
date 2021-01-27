import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm={
    email: "",
    password: "",
  }
  onLogIn(){
    console.log("LogIn form submitted");
    console.log(this.loginForm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
