import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor(private http: HttpClient) { }


  createUser(newUser: User) {
    
    this.http.post('https://blackpoli.herokuapp.com/users', newUser).subscribe(user=> console.log(user));
  }
}
