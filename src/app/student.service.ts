import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  getStudents() {
    return [
      { id: 1, name: 'rama', course: 'Angular' },
      { id: 2, name: 'sita', course: 'React' },
      { id: 3, name: 'laxmana', course: 'Vue' },
    ];
  }
  constructor() {}
}
