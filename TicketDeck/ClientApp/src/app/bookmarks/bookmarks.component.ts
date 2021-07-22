

import { Component } from '@angular/core';
import { Bookmarks } from './Bookmarks';
import { HelpDeskService } from '../help-desk.service';


@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
  providers: [HelpDeskService]

})
/** Bookmarks component*/
export class BookmarksComponent {
  /** Bookmarks ctor */
  public bookmarks: Bookmarks[] = [];


  constructor(private HelpDeskService: HelpDeskService) {
    this.bookmarks = []

  }
}










////import { Component } from '@angular/core';
////import { Bookmarks } from './Bookmarks';
////import { Tickets } from './tickets/Tickets';
////import { User } from './user/User';
////import { HelpDeskService } from '../help-desk.service';


////@Component({
////    selector: 'app-bookmarks',
////    templateUrl: './bookmarks.component.html',
////  styleUrls: ['./bookmarks.component.scss'],
////  providers: [HelpDeskService]

////})
/////** Bookmarks component*/
////export class BookmarksComponent {
////  /** Bookmarks ctor */
////  public bookmarks: Bookmarks[] = [];
////  public users: User[] = [];
////  public tickets: Tickets[] = [];


////  constructor(private HelpDeskService: HelpDeskService) {
////    this.bookmarks = [];
////    this.users = [];
////    this.tickets = [];

////    }
////}
