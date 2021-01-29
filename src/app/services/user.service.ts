import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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
}
