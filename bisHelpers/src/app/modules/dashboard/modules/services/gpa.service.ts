import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from 'src/environments/environment.development';
import { GpaReport } from '../interfaces/gpa-report';

@Injectable({
  providedIn: 'root',
})
export class GpaService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  private API_BASE_URL = environment.API_BASE_URL + '/Student';

  postRegisterAcademicLectures(request: any): Observable<any> {
    return this.http.post<any>(
      `${this.API_BASE_URL}/RegisterAcademicLectures`,
      request
    );
  }

  getGpaAnalysis(): Observable<GpaReport> {
    return this.http.get<GpaReport>(`${this.API_BASE_URL}/GpaAnalysis`);
  }
}
