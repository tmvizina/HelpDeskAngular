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
