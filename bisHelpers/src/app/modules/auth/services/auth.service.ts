import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequestInterface } from '../interfaces/login-request.interface';
import { environment } from 'src/environments/environment.development';
import { Observable, catchError, map, of } from 'rxjs';
import { LoginResponseInterface } from '../interfaces/login-response.interface';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SignupRequestInterface } from '../interfaces/signup-request.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  private API_BASE_URL = environment.API_BASE_URL + '/auth';

  login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(
      `${this.API_BASE_URL}/login`,
      data
    );
  }

  register(data: SignupRequestInterface): Observable<any> {
    return this.http.post(`${this.API_BASE_URL}/register`, data);
  }

  validateToken(token: string): Observable<boolean> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http
      .get(`${this.API_BASE_URL}/validateToken`, {
        headers,
        observe: 'response',
      })
      .pipe(
        map((response) => response.status === 200),
        catchError(() => of(false))
      );
  }

  logout(): void {
    this.localStorageService.clear();
    this.router.navigate(['/auth/login']);
  }
}
