import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css'],
})
export class StudentdetailsComponent implements OnInit {
  public students = [] as any;

  constructor(private _stdService: StudentService) {}

  ngOnInit() {
    this.students = this._stdService.getStudents();
  }
}
