import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Student } from 'src/app/core/interfaces/student';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  constructor(private userService: UserService) {}
  user!: Student;

  ngOnInit() {
    this.userService.getUser().subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }
}
