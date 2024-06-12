import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AcademicRegisterationGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const IsAllowed = this.localStorageService.getItem('IsAllowed');
    if (!IsAllowed) {
      this.router.navigate(['/dashboard/registered-courses']);
      return false;
    } else {
      this.router.navigate(['/dashboard']);
      return true;
    }
  }
}
