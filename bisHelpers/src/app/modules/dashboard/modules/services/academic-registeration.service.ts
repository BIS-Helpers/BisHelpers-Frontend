import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from 'src/environments/environment.development';
import { AcademicCourses } from '../interfaces/academic-courses';
import { Observable } from 'rxjs';
import { Professor } from '../interfaces/professor';

@Injectable({
  providedIn: 'root',
})
export class AcademicRegisterationService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  private API_BASE_URL = environment.API_BASE_URL + '/AcademicCourse';

  getAllAcademicCourse(): Observable<AcademicCourses[]> {
    return this.http.get<AcademicCourses[]>(this.API_BASE_URL);
  }

  getProfessorCourses(academicCourseId: number): Observable<Professor[]> {
    return this.http.get<Professor[]>(
      this.API_BASE_URL + `/${academicCourseId}/Professors`
    );
  }
}
