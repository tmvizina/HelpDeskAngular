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
/** User component **/
export class UserComponent {
    //array of users
  public users: User[] = [];
  public putUser: HttpClient = null;
  //this will be the base url 
  public apiBase: string = "";

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.putUser = http;
    this.apiBase = baseUrl;


    
    http.get<User[]>(apiBase + 'api/users').subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => console.error(error));


  }

  //put will create a new user
  addUser(newUser: User) {

    this.putUser.put<User>(this.apiBase + 'api/users').subscribe(result =>)
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
