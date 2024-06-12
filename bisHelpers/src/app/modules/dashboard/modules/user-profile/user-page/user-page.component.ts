import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {
  Student,
  StudentRegisteredCourses,
} from 'src/app/core/interfaces/student';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  constructor(private userService: UserService) {}
  user$ = this.userService.getUser();
  courses: StudentRegisteredCourses[] = [];
  user!: Student;

  ngOnInit() {
    this.user$.subscribe((user) => {
      this.courses = user.registeredAcademicLectures;
      console.log(this.courses);
    });
  }
}
