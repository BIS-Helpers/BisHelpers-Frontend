import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequestInterface } from '../interfaces/login-request-interface';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { LoginResponseInterface } from '../interfaces/login-response-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private API_BASE_URL = environment.API_BASE_URL + '/Auth';

  login(data: LoginRequestInterface): Observable<LoginResponseInterface> {
    return this.http.post<LoginResponseInterface>(
      `${this.API_BASE_URL}/login`,
      data
    );
  }
}
