import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public parentMsg = 'This is from Parent Jay!!!';
  public msg: any;
}
