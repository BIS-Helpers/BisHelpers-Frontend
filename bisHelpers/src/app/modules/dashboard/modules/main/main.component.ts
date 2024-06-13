import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Student } from 'src/app/core/interfaces/student';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  user$ = this.userService.getUser();
  user!: Student;

  constructor(
    private userService: UserService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.user$.subscribe((user) => {
      this.user = user;
      const oldUser = this.localStorageService.getItem('user');
      this.localStorageService.setItem('user', { ...user, ...oldUser });
      console.log(this.user);
    });
  }
}
