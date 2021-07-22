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

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this.apiBase = baseUrl;
    this.postUser = http;

    http.get<User[]>(this.apiBase + 'api/users').subscribe(result => {
      this.users = result;
      console.log(this.users);
    }, error => console.error(error));

    ////add a new user from form
    //addUser(form: NgForm){
    //  let name = form.form.value.name;
    //  this.name.push(name)

    //}
  }

  //put will create a new user
  addUser(form: NgForm) {
    let newUser: User = { name: form.form.value.name, userID: null };
    //let name: string = form.form.value.name;
    this.postUser.post<User>(this.apiBase + 'api/users', newUser).subscribe(result => {
      console.log(result)
    });
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
