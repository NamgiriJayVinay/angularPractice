import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  @Input('fromParent') public parent;
  constructor() {}
  @Output() public childInfo = new EventEmitter();
  ngOnInit() {}
  fireEvent() {
    this.childInfo.emit('This is from Child Jay!!!');
  }
}
