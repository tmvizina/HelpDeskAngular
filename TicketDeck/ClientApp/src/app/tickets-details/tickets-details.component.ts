import { Component, Inject } from '@angular/core';
import { Tickets } from '../tickets/Tickets';
import { HelpDeskService } from '../help-desk.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private modalService: NgbModal, http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route:ActivatedRoute) {
    console.log(route.snapshot.params.Id);
    http.get<Tickets>(baseUrl + 'api/tickets/' + route.snapshot.params.Id).subscribe(result => {
      this.ticket = result;
      console.log(this.ticket);
    }, error => console.error(error));

   
    
  }

}
