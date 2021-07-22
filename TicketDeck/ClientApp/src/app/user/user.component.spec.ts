/*/*/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />*/*/
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { UserComponent } from './user.component';

let component: UserComponent;
let fixture: ComponentFixture<UserComponent>;

describe('User component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ UserComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
