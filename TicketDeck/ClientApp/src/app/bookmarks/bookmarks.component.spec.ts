/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { BookmarksComponent } from './bookmarks.component';

let component: BookmarksComponent;
let fixture: ComponentFixture<BookmarksComponent>;

describe('Bookmarks component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BookmarksComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(BookmarksComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});