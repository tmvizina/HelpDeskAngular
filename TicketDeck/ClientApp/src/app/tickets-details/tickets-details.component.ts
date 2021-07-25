import { Component, Inject } from '@angular/core';
import { Tickets } from '../tickets/Tickets';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {bookmarks} from '../bookmarks/Bookmarks'
import { LoginService } from '../login.service';
import { User } from '../user/user';

@Component({
  selector: 'app-tickets-details',
  templateUrl: './tickets-details.component.html',
  providers: [HttpClient]
})
/** Tickets component*/
export class TicketsDetailsComponent {
  title = 'appBootstrap';

  //array of Tickets
  public ticket: Tickets;
  closeResult: string;
  public apiBase: string = "";
  public http: HttpClient;
  public bookmarks: bookmarks[];
  public bookmark: bookmarks;
  public users: User[] = [];
  public user: User;

  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route:ActivatedRoute, public LoginService:LoginService) {
    console.log(route.snapshot.params.Id);
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

  public displayUser(http: HttpClient): User[] {
    http.get<User[]>(this.apiBase + 'api/users').subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => console.error(error));
    return this.users;
  }


  addBookmark() {
    console.log(this.ticket)
    let activeuser = this.LoginService.getLogin();
    console.log(activeuser);
    this.users = this.displayUser(this.http);
    console.log(this.users)
    this.users.forEach(user => {
      if (user.name === activeuser) {
        this.user = user;
      }
      if (this.user = undefined) {
        user = { userID: 6, name: "Hello" }
      }
    });
    this.bookmark = { bookmarksId: 0, personId: this.user.userID, ticketId: this.ticket.ticketId };

    this.http.post<bookmarks>(this.apiBase + 'api/Bookmarks', this.bookmark).subscribe(result => {
        console.log(result)

    this.bookmarks.push(this.bookmark);
    });
  }

}
