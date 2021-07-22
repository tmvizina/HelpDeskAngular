"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var tickets_component_1 = require("./tickets.component");
var component;
var fixture;
describe('Tickets component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [tickets_component_1.TicketsComponent],
            imports: [platform_browser_1.BrowserModule],
            providers: [
                { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = testing_1.TestBed.createComponent(tickets_component_1.TicketsComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', testing_1.async(function () {
        expect(true).toEqual(true);
    }));
});
//# sourceMappingURL=tickets.component.spec.js.map