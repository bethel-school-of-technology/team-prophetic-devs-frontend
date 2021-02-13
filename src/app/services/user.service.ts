import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //SignUp Function
  signUp(firstName: string, lastName: string, email: string, username: string, password: string, cityState: string, instruments: string, genres: string) {
    const register: Register = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      cityState: cityState,
      instruments: instruments,
      genres: genres,
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
//Function to make a server request to /api/users/profile route
//type of request: GET
//need to provide an Authorization header w/the token from login
//not a component
getUserProfile(): Observable<any>{
  let myHeaders = {
    Authorization: localStorage.getItem("VIP Pass")
  }
  return this.http.get("http://localhost:5000/api/users/profile", {headers: myHeaders});
}

}
