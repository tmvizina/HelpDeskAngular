import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tickets } from './tickets/tickets';
import { User } from './user/user';
import { Bookmarks } from './bookmarks/bookmarks';



@Injectable({
  providedIn: 'root'
})


export class HelpDeskService {
  //this will inject the HTTP client and now we can use it in all of our methods
  //the HTTP client is needed to preform HTTP request - get/post/put/delete
  constructor(private http: HttpClient) {
  }

  //This is the base of the URL that is injected into all the methods that call the API controller.
  controller: string = '';
  baseURL: string = `https://localhost:44314/api/${this.controller}`

  //---API calls---
  getUser(): any {
    this.controller = 'Users'
    return this.http.get<User>(this.baseURL);
  }

  getBookmarks(): any {
    this.controller = 'Bookmarks'
    return this.http.get<Bookmarks>(this.baseURL);
  }

  getTickets(): any {
    this.controller = 'Tickets'
    return this.http.get<Tickets>(this.baseURL);
  }

  //getBookmarks(): any {
  //  this.controller = 'Bookmarks'
  //  return this.http.get<Bookmark>(this.baseURL);
  //}

}
