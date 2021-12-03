import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  public mylist = ['Angular', 'React', 'Vue'];
  constructor() {}

  ngOnInit() {}
}
