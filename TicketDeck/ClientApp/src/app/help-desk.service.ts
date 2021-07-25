import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injectable } from '@angular/core';
import { Tickets } from './tickets/tickets';
import { User } from './user/user';
import { Router } from '@angular/router';
import { bookmarks } from './bookmarks/bookmarks';



@Injectable({
  providedIn: 'root'
})


export class HelpDeskService {
  public users: User[];
  public apiBase: string = "";
  public http: HttpClient;
  controller: string = '';
  baseURL: string = 'https://localhost:44314/api/${this.controller}'
  userURL: string = 'https://localhost:44314/api/users'
  //this will inject the HTTP client and now we can use it in all of our methods
  //the HTTP client is needed to preform HTTP request - get/post/put/delete
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiBase = baseUrl;
    this.http = http;
  }

  //---API calls---
  public displayUser(http: HttpClient): User[] {
    http.get<User[]>(this.apiBase + 'api/users').subscribe(result => {
      this.users = result;
      console.log("function" + this.users);
    }, error => console.error(error));
    return this.users;
  }


  getBookmarks(): any {
    this.controller = 'Bookmarks'
    return this.http.get<bookmarks>(this.baseURL);
  }

  getTickets(): any {
    this.controller = 'Tickets'
    return this.http.get<Tickets>(this.baseURL);
  }


}
