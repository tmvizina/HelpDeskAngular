import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Tickets } from './tickets/tickets';
import { User } from './user/user';
import { bookmarks } from './bookmarks/bookmarks';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public users: User[] = [];
  //this will be the base url 
  public apiBase: string = "";
  public http: HttpClient = null;

  constructor(http: HttpClient) {
  }

  //concatonating / appending our users array into our base url
  getUser(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<User[]>(baseUrl + 'User/All');
  }
}
