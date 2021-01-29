import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //SignUp Function
  signUp(firstName: string, lastName: string, email: string, username: string, password: string) {
    const register: Register = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    }
    return this.http.post("http://localhost:5000/api/users/signup", register);

  }
//Login Function
  logIn(email: string, password: string) {
    const login: Login = {
      email: email,
      password: password
    }
    return this.http.post("http://localhost:5000/api/users/login", login)
  }

}
