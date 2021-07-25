import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tickets } from './tickets/tickets';
import { User } from './user/user';
import { bookmarks } from './bookmarks/bookmarks';



@Injectable({
  providedIn: 'root'
})


export class LoginService {
 
  constructor() {
  }

  login(login: User) {
   
    localStorage.setItem('login', JSON.stringify(login));

  }

  getLogin():object {

    return JSON.parse(localStorage.getItem('login'));
  }

  logout() {
    localStorage.removeItem('login');
  }


}
