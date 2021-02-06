import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/services/user-login.service';
import { Router } from '@angular/router';

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
    .subscribe((Response: any) =>{
      console.log(Response)
      if(Response.status === 200){
        window.alert("Login Successful") 
        localStorage.setItem("VIP Pass", Response.token)
        this.myRouter.navigate(["/profile"])
      }
      else{
        window.alert("Login Failed")
      }
      this.loginForm ={
        email: "",
        password: ""
      }
    })
  }
  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private myLoginService: UserLoginService, private myRouter: Router) { }
  ngOnInit(): void {
  }

}
