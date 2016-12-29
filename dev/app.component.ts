import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>Jay Swaminarayan,  {{name}}</h1>
    <ul>
    <li *ngFor="#course of course">
    {{course}}
    </li>
    </ul>
    `
})
export class AppComponent {
    name= 'Das na Das'
    course = ["cs1","cs2","cs3"];
}