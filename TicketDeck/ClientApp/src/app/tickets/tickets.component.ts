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

  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Tickets[]>(baseUrl + 'api/tickets').subscribe(result => {
      this.tickets = result;
      console.log(this.tickets);
    }, error => console.error(error));

  }

  //Adding a new ticket to the tickets database
  addTicket(form: NgForm) {
    let title = form.form.value.title;
    let description = form.form.value.descrption;
    let resolved = form.form.value.resolved;
    let solution = form.form.value.solution;
    let Priotity = form.form.value.priority;
    let ticket: Tickets = {TicketId: undefined, Title: title, Description: description, Resolved: resolved, Solution: solution, Priotity: Priotity }
    this.tickets.push(ticket);
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
