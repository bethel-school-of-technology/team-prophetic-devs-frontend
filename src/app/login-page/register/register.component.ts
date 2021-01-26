import { Component, OnInit } from '@angular/core';
import { Groupie } from '../../model/groupie';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  onRegister(values: Groupie){
    console.log('Register Form Submitted!')
    console.log(values)
  }

  Roles: any = ['Admin', 'Author', 'Reader'];
  constructor() { }

  ngOnInit(): void {
  }

}
