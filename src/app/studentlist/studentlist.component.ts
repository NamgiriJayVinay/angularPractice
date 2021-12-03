import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css'],
})
export class StudentlistComponent implements OnInit {
  public students = [] as any;

  constructor(private _stdService: StudentService) {}

  ngOnInit() {
    this.students = this._stdService.getStudents();
  }
}
