import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisteredCoursesGuard implements CanActivate {
  IsAllowed: boolean = false;
  private localStorageIsAllowedSub: Subscription = new Subscription();

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.IsAllowed = this.localStorageService.getItem('IsAllowed');
  }

  canActivate(): any {
    this.localStorageIsAllowedSub =
      this.localStorageService.IsAllowed$.subscribe((isAllowed) => {
        this.IsAllowed = isAllowed;
      });
    return !this.IsAllowed ? true : this.router.navigate(['/dashboard']);
  }
}
