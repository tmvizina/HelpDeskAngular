import { Component } from '@angular/core';
import { Bookmarks } from './Bookmarks';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { LoginService } from '../login.service';
import {Tickets} from "../tickets/Tickets"

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  providers: [HttpClient]
})
export class BookmarksComponent {
  public bookmarks: Bookmarks[] = [];
  public tickets: Tickets[] = [];
  public ticketslist: Tickets[]=[];
  public postBookmark: HttpClient = null;
  public apiBase: string = "";
  public http: HttpClient = null;
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public route: Router, LoginService:LoginService) {
    this.apiBase = baseUrl;
    this.http = http;
    http.get<Bookmarks[]>(this.apiBase + 'api/bookmarks').subscribe(result => {
      this.bookmarks = result;
      console.log(this.bookmarks);
    }, error => console.error(error));
  }


  getTickets(http: HttpClient):any {
    http.get<Tickets[]>(this.apiBase + 'api/tickets').subscribe(result => {
      this.tickets = result;
      console.log(this.tickets);
      return result;
    }, error => console.error(error));
  }



  //getBookmarks(http: HttpClient) {
  //  http.get<Bookmarks[]>(this.apiBase + 'api/bookmarks').subscribe(result => {
  //    this.bookmarks = result;
  //    console.log(this.bookmarks);

  //    this.ticketslist = this.getTickets(http);

  //    foreach(bookmark: Bookmarks in bookmarks: Bookmarks[]){


  //    }

  //  }, error => console.error(error));
  //}
  //Need to check on this, I dont think it's right (check casing and what I put in the URL)
  addBookmark(form: NgForm) {
    let personIdf = form.form.value.personId;
    let ticketIdf = form.form.value.ticketId;
    this.http.post<Bookmarks>(this.apiBase + 'api/bookmarks?PersonID' + personIdf, ticketIdf).subscribe(result => {
      console.log(result)
      let b: Bookmarks = { personId: personIdf, ticketId: ticketIdf, bookmarksId: this.bookmarks.length };
      this.bookmarks.push(b);
    });
  }
  //removeBookmark(form: NgForm) {
  //  let id = form.form.value.bookmarkId;
  //  this.http.delete<Bookmarks>(this.apiBase + 'api/bookmarks?BookmarkId' + id).subscribe(result => {
  //    console.log(result)
  //    this.bookmarks.push(id)
  //  });
  //}
  //toggleBookmark(form: NgForm) {
  //  let personIdf = form.form.value.personId;
  //  let ticketIdf = form.form.value.ticketId;
  //  let found = -1
  //  for (Bookmarks b in this.bookmarks)
  //  {
  //    if (personIdf == b.personId && ticketIdf == b.ticketId) {
  //      this.removeBookmark(b);
  //      found = b.ticketId
  //      break;
  //    }
  //  }
  //  if (found = -1) {
  //    let b: Bookmarks = { PersonId: personIdf, TicketId: ticketIdf, BookmarkId: this.bookmarks.length };
  //    this.addBookmark(b);
  //  }
  //}
}
