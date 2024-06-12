import { Component, Input, OnInit } from '@angular/core';
import { StudentRegisteredCourses } from 'src/app/core/interfaces/student';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css'],
})
export class ViewTableComponent implements OnInit {
  @Input() AcademicLectures!: StudentRegisteredCourses[];

  cols!: Column[];

  constructor() {}

  ngOnInit() {
    this.cols = [
      { field: 'academicCourse.name', header: 'Course' },
      { field: 'professor.fullName', header: 'Professor' },
      { field: 'day', header: 'Day' },
      { field: 'groupNumber', header: 'Group' },
      { field: 'startTime', header: 'Start Time' },
    ];
  }
  getNestedProperty(object: any, path: string) {
    return path.split('.').reduce((o, p) => o && o[p], object);
  }
}
