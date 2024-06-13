import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import {
  Student,
  StudentRegisteredCourses,
} from 'src/app/core/interfaces/student';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  user: Student;
  gpa: number | null = null;
  totalEarnedHours: number | null = null;
  registeredAcademicLectures: StudentRegisteredCourses[] = [];
  IsAllowed: boolean = false;

  private localStorageUserSub: Subscription = new Subscription();
  private localStorageIsAllowedSub: Subscription = new Subscription();

  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService
  ) {
    this.user = this.localStorageService.getItem('user');
    this.IsAllowed = this.localStorageService.getItem('IsAllowed');
  }

  ngOnInit(): void {
    this.localStorageUserSub = this.localStorageService.user$.subscribe(
      (user) => {
        this.user = user;
      }
    );

    this.localStorageIsAllowedSub =
      this.localStorageService.IsAllowed$.subscribe((isAllowed) => {
        this.IsAllowed = isAllowed;
      });

    initFlowbite();
  }

  ngOnDestroy(): void {
    this.localStorageUserSub.unsubscribe();
    this.localStorageIsAllowedSub.unsubscribe();
  }

  logout() {
    this.authService.logout();
  }
}
