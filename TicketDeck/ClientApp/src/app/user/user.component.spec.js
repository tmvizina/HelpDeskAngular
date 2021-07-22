"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*/*/ // <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />*/*/
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var user_component_1 = require("./user.component");
var component;
var fixture;
describe('User component', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_component_1.UserComponent],
            imports: [platform_browser_1.BrowserModule],
            providers: [
                { provide: testing_1.ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = testing_1.TestBed.createComponent(user_component_1.UserComponent);
        component = fixture.componentInstance;
    }));
    it('should do something', testing_1.async(function () {
        expect(true).toEqual(true);
    }));
});
//# sourceMappingURL=user.component.spec.js.map