import { Component, Inject } from '@angular/core';
import { Tickets } from './Tickets';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  providers: [HttpClient]
})
/** Tickets component*/
export class TicketsComponent {
  //array of Tickets
  public tickets: Tickets[] = [];
  public postTickets: HttpClient = null;
  public apiBase: string = "";
  public http: HttpClient = null;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tickets[]>(baseUrl + 'api/tickets').subscribe(result => {
      this.tickets = result;
      console.log(this.tickets);
    }, error => console.error(error));
  }

  getTickets(http: HttpClient) {
    http.get<Tickets[]>(this.apiBase + 'api/tickets').subscribe(result => {
      this.tickets = result;
      console.log(this.tickets);
    }, error => console.error(error));
  }

  removeTicket(form: NgForm) {
    let id = form.form.value.TicketId;
    this.http.delete<Tickets>(this.apiBase + 'api/tickets?TicketsID' + id).subscribe(result => {
      console.log(result)
      this.tickets.push(id)
    });
  }

}
