import { Component, Inject } from '@angular/core';
import { Tickets } from './Tickets';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  providers: [HttpClient]
})
/** Tickets component*/
export class TicketsComponent {
  title = 'appBootstrap';

  //array of Tickets
  public tickets: Tickets[] = [];
  closeResult: string;
  public apiBase: string = "";
  public http: HttpClient = null;

  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tickets[]>(baseUrl + 'api/tickets').subscribe(result => {
      this.tickets = result;
      console.log(this.tickets);
    }, error => console.error(error));

    this.apiBase = baseUrl;
    this.http = http;
  }

  //Adding a new ticket to the tickets database


  addTicket(form: NgForm) {
    console.log(form.form.value.title)
    let title = form.form.value.title; 

    let description = form.form.value.description;
    let resolved = form.form.value.resolved;
    let solution = form.form.value.solution;
    let priority = form.form.value.priority;
    let ticket: Tickets = { TicketId: 0, Title: title, Description: description, resolved: resolved, solution: solution, priority: priority }
    this.http.post<Tickets>(this.apiBase + 'api/Tickets', ticket).subscribe(result => {
      console.log(result)

      this.tickets.push(result);
    });
  }


  open(content) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    }
        else
    {


      return `with: ${reason}`;

    }

  }

}
