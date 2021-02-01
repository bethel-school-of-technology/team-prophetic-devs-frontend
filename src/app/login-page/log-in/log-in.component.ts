import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';



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

  logIn() {
    console.log("LogIn form submitted");
    this.myLoginService.logIn(this.loginForm.email,this.loginForm.password)
    .subscribe(Response =>{
      console.log(Response)
      this.loginForm ={
        email: "",
        password: ""
      }
    })
  }

  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private myLoginService: UserLoginService) { }

  ngOnInit(): void {
  }

}
