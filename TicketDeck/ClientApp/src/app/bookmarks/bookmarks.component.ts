

import { Component } from '@angular/core';
import { Bookmarks } from './Bookmarks';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  providers: [HttpClient]
})


export class BookmarksComponent {
  public bookmarks: Bookmarks[] = [];
  public postBookmark: HttpClient = null;
  public apiBase: string = "";
  public http: HttpClient = null;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, public route: Router) {
    this.apiBase = baseUrl;
    this.http = http;

    http.get<Bookmarks[]>(this.apiBase + 'api/users').subscribe(result => {
      this.bookmarks = result;
      console.log(this.bookmarks);
    }, error => console.error(error));
  }


  getBookmarks(http: HttpClient) {
    http.get<Bookmarks[]>(this.apiBase + 'api/users').subscribe(result => {
      this.bookmarks = result;
      console.log(this.bookmarks);
    }, error => console.error(error));
  }

  //Need to check on this, I dont think it's right (check casing and what I put in the URL)
  addBookmark(form: NgForm) {
    let personIdf = form.form.value.personId;
    let ticketIdf = form.form.value.ticketId;
    this.http.post<Bookmarks>(this.apiBase + 'api/bookmarks?PersonID' + personIdf, ticketIdf).subscribe(result => {
      console.log(result)
      let b: Bookmarks = { personId: personIdf, ticketId: ticketIdf, bookmarkId: this.bookmarks.length };
      this.bookmarks.push(b);
    });
  }


  removeBookmark(form: NgForm) {
    let id = form.form.value.bookmarkId;
    this.http.delete<Bookmarks>(this.apiBase + 'api/bookmarks?BookmarkId' + id).subscribe(result => {
      console.log(result)
      this.bookmarks.push(id)
    });
  }

}

  //ToggleBookmarks(form: NgForm)

  ////will recall page and dsplay updated user list
  //buttonSubmit(form: NgForm) {
  //  this.addUser(form);
  //  this.displayUser(this.http);
  //}

  ////this is select the user and route to a ticket page
  ////it is a router object and navigate by URL
  //selectUser(form: NgForm) {
  //  if (form.form.value !== undefined) {
  //    this.LoginService.login(form.form.value)
  //    this.route.navigateByUrl('/tickets');
  //  }
  //}
