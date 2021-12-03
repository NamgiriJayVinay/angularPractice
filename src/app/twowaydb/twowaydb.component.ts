import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twowaydb',
  templateUrl: './twowaydb.component.html',
  styleUrls: ['./twowaydb.component.css'],
})
export class TwowaydbComponent implements OnInit {
  public count = 0;
  @Input('fromParent') public par;
  onclick() {
    this.count++;
  }
  constructor() {}
  public data = ' ';
  ngOnInit() {}
}
