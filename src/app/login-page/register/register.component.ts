import { Component, OnInit } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm={
    firstName: "",
    lasrname: "",
    email: "",
    username: "",
    password: "",
  }
  onRegister(){
    console.log("Login Successful");
    console.log(this.registerForm)
  }

  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor() { }

  ngOnInit(): void {
  }


}
