import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private tokenChange = new Subject<string>();

  constructor() {
    window.addEventListener('storage', (event) => {
      if (event.key === 'accessToken') {
        this.tokenChange.next(event.newValue || '');
      }
    });
  }

  getTokenChangeObservable() {
    return this.tokenChange.asObservable();
  }
}
