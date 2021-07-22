import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { TicketsComponent } from './tickets.component';

let component: TicketsComponent;
let fixture: ComponentFixture<TicketsComponent>;

describe('Tickets component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ TicketsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(TicketsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
