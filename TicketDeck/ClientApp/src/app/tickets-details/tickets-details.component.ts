import { Component, Inject } from '@angular/core';
import { Tickets } from '../tickets/Tickets';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {bookmarks} from '../bookmarks/Bookmarks'
import { LoginService } from '../login.service';
import { User } from '../User/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tickets-details',
  templateUrl: './tickets-details.component.html',
  providers: [HelpDeskService, HttpClient]
})
/** Tickets component*/
export class TicketsDetailsComponent {
  title = 'appBootstrap';

  //array of Tickets
  public ticket: Tickets;
  closeResult: string;
  public apiBase: string = "";
  public bookmarks: bookmarks[];
  public bookmark: bookmarks;
  public users: User[] = [];
  public user: User;
 

  constructor(private modalService: NgbModal, private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute, public LoginService: LoginService, public HelpDeskService: HelpDeskService) {
    console.log(route.snapshot.params.Id);
   
    http.get<User[]>(baseUrl + 'api/users').subscribe(result => {
      this.users = result;
      console.log("constructor" + this.users);
    }, error => console.error(error));

    console.log(this.users);
    http.get<Tickets>(baseUrl + 'api/tickets/' + route.snapshot.params.Id).subscribe(result => {
      this.ticket = result;
      console.log(this.ticket);
    }, error => console.error(error));
  }

  addSolution(form:NgForm, ticket: Tickets): Tickets {

    ticket.solution = form.form.value.solution;
    ticket.resolved = true;
    console.log(ticket)
    return ticket;
  }

  //public displayUser(http: HttpClient): User[] {
  //  http.get<User[]>(this.apiBase + 'api/users').subscribe(result => {
  //    this.users = result;
  //    console.log(this.users);
  //  }, error => console.error(error));
  //  return this.users;
  //}



  addBookmark() {
    console.log(this.ticket)
    let activeuser:Object = this.LoginService.getLogin();
    console.log(activeuser);
    console.log(this.users);
    let values: string[]= Object.keys(activeuser).map(key => activeuser[key]);
    console.log(values);
    this.users.forEach(item => {
      console.log(item)
      if (item.name.includes(values[0])) {
        this.user = item;
        console.log("FOUND IT" + this.user);
      }
    });
    let userValues: string[] = Object.keys(this.user).map(key => this.user[key]);
    console.log(userValues[1])
    let num: number = parseInt(userValues[0]);
    console.log(num);
    console.log(num);
    this.bookmark = { bookmarksId: 0, personId:num, ticketId: this.ticket.ticketId };

    this.http.post<bookmarks>(this.apiBase + 'api/Bookmarks', this.bookmark).subscribe(result => {
      console.log(result);
    });
  }

}
