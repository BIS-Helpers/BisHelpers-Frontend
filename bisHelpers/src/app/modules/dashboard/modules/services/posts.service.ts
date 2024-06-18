import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Posts } from '../interfaces/posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  private API_BASE_URL =
    environment.API_BASE_URL + '/Announcement/Student';

  getPosts(): Observable<Posts> {
    return this.http.get<Posts>(this.API_BASE_URL);
  }
}
