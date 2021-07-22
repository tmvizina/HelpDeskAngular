import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpDeskService } from '../help-desk.service';
import { User } from './User';
import { NgForm } from '@angular/forms';

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
  public postUser: HttpClient = null;
  //this will be the base url 
  public apiBase: string = "";
  public http: HttpClient = null;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.apiBase = baseUrl;
    this.http = http;

    http.get<User[]>(this.apiBase + 'api/users').subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => console.error(error));

  }

  //will call API and update the display
  displayUser(http: HttpClient) {
    http.get<User[]>(this.apiBase + 'api/users').subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => console.error(error));
  }

  //put will create a new user and add it to the database
  addUser(form: NgForm) {
    let name: string = form.form.value.name;
    this.http.post<User>(this.apiBase + 'api/users?name=' + name, {}).subscribe(result => {
      console.log(result)
      let u: User = { name: name, userID: this.users.length };
      this.users.push(u);

    });
  }

  //will recall page and display updated user list
  buttonSubmit(form: NgForm) {
    this.addUser(form);
    this.displayUser(this.http);
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
