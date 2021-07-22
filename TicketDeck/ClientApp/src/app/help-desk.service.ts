import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tickets } from './tickets/tickets';
import { User } from './user/user';
import { Bookmarks } from './bookmarks/bookmarks';


@Injectable({
  providedIn: 'root'
})


export class HelpDeskService {
 
  constructor(private http: HttpClient) {


  }
  // Not super confident with this subscribe method really
  controller: string = '';
  baseURL: string = `https://localhost:44314/api/${this.controller}`


  getUser(): any {
    this.controller = 'Users'
    return this.http.get<User>(this.baseURL);
  }


  ////  //getUser(): any {
  ////  //  this.controller = 'Users'
  ////  //  return this.http.get<User>(this.baseURL);
  ////  //}

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
