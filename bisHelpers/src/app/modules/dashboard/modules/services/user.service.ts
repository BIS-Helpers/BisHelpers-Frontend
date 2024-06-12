import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/core/interfaces/student';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  private API_BASE_URL = environment.API_BASE_URL + '/auth';

  getUser() {
    return this.http.get<Student>(`${this.API_BASE_URL}/profile`);
  }

  updateUser(user: Student) {
    return this.http.put<Student>(`${this.API_BASE_URL}/profile`, user);
  }

  resetPassword(oldPassword: string, newPassword: string) {
    return this.http.post(`${this.API_BASE_URL}/resetPassword`, {
      oldPassword,
      newPassword,
    });
  }
}
