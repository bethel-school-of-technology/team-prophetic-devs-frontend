import { Component, OnInit } from '@angular/core';
import { allowedNodeEnvironmentFlags } from 'process';
import { UserService } from 'src/app/services/user.service';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  }
  
  onRegister() {
    console.log("Registered Successfully");
    console.log(this.registerForm);
    this.myUserService.signUp(this.registerForm.firstName, this.registerForm.lastName, this.registerForm.email, this.registerForm.username, this.registerForm.password)
    .subscribe(response =>{
      console.log(response)
      this.registerForm = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
      }
    })
  }

  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor(private myUserService: UserService) { }

  ngOnInit(): void {
  }


}
