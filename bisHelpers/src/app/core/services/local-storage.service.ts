import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private userSubject: BehaviorSubject<any>;
  user$: Observable<any>;
  private userAllowedSubject: BehaviorSubject<boolean>;
  IsAllowed$: Observable<boolean>;

  constructor() {
    // Initialize userSubject with current user from local storage
    this.userSubject = new BehaviorSubject<any>(this.getItem('user'));
    this.user$ = this.userSubject.asObservable();

    // Initialize IsAllowedSubject with current IsAllowed from local storage
    this.userAllowedSubject = new BehaviorSubject<boolean>(
      this.getItem('IsAllowed')
    );
    this.IsAllowed$ = this.userAllowedSubject.asObservable();
  }

  setItem(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      if (key === 'user') {
        this.userSubject.next(data);
      }
      if (key === 'IsAllowed') {
        this.userAllowedSubject.next(data);
      }
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  getItem(key: string): any {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } catch (error) {
      console.error('Error getting from localStorage', error);
      return null;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
      this.userSubject.next(null);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
      this.userSubject.next(null);
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  }
}
