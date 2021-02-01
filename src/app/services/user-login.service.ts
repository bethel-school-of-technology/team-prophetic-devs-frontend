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
    return this.http.post("http://localhost:5000/api/users/login", login);

  }
}
