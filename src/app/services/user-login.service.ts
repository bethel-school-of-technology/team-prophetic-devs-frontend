import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';



  @Injectable({
    providedIn: 'root'
  })
  export class UserLoginService {
  constructor(private http: HttpClient) { }

  logIn(email: string, password: string) {
    const login: Login = {
      email: email,
      password: password
    }
    return this.http.post("http://ec2-54-174-209-56.compute-1.amazonaws.com/api/users/login", login);

  }
}
