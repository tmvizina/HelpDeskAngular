import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpDeskService } from '../help-desk.service';
import {User} from './User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [HttpClient]
})
/** User component*/
export class UserComponent {
    //array of users
    public users: User[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl:string) {
    http.get<User[]>(baseUrl + 'api/users').subscribe(result => {
      this.users = result;
      console.log(this.users);
      }, error => console.error(error));
    }

  //constructor(private user: HelpDeskService, @Inject('BASE_URL') baseUrl: string) {
  //  this.user.getUser();
  //  console.log(this.user.getUser());
  //}

  //getUser() {
  //  this.user.getUser()
  //    .subscribe((user: any))=> {
  //    this.user=
    
  //}
}
