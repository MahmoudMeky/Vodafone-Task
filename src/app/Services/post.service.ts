import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Post } from '../Interfaces/post';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getUserPosts(userId: number): Observable<Post[]> {
    return this.httpClient
      .get<Post[]>(`${environment.apiUrl}/posts?userId=${userId}`)
      .pipe(
        retry(3),
        catchError((err) => {
          alert('Error Occured!');
          return throwError(() => new Error(err));
        })
      );
  }
}
