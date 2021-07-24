import { Component, Inject } from '@angular/core';
import { Tickets } from '../tickets/Tickets';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Bookmarks} from '../bookmarks/Bookmarks'
import { LoginService } from '../login.service';
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
  public http: HttpClient = null;
  public bookmarks: Bookmarks[];

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

  addBookmark() {
   console.log(this.ticket)
    let activeuser = this.LoginService.getLogin();
    console.log(activeuser)
    let bookmark: Bookmarks = { PersonId: activeuser, TicketId: this.ticket.TicketId, BookmarksId:0 };
    
    this.http.post/*<Bookmarks>*/(this.apiBase + 'api/Bookmarks', bookmark).subscribe(result => {
        console.log(result)

    this.bookmarks.push(bookmark);
    });
  }

}
