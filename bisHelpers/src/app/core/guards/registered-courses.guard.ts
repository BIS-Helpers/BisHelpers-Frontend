import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class RegisteredCoursesGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(): any {
    const IsAllowed: boolean = this.localStorageService.getItem('IsAllowed');
    return !IsAllowed ? true : this.router.navigate(['/dashboard']);
  }
}
