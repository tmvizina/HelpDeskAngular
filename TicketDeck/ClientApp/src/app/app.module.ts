import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TicketsComponent } from './tickets/tickets.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { CommonModule } from '@angular/common';
import { TicketsDetailsComponent } from './tickets-details/tickets-details.component';
import { LoginService } from './login.service';

/*Don't forgot to import the component into app.module so we can pass it on 1 of 3*/


@NgModule({
  declarations: [
    /*This is where we can set our decalarations of what component step 2 of 3 */
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TicketsComponent,
    UserComponent,
    BookmarksComponent,
    TicketsDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([

      /*The '' path is how we can change the starting location of our program
       Step 3 of 3 of connecting a new component is directly doing the path*/
      { path: '', component: UserComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'tickets', component: TicketsComponent },
      { path: 'user', component: UserComponent },
      { path: 'bookmarks', component: BookmarksComponent },
      { path: 'ticket/:Id' , component: TicketsDetailsComponent },
    ]),
    BrowserAnimationsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
