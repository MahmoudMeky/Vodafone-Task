import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PostComment } from '../Interfaces/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getPostComments(postId: number): Observable<PostComment[]> {
    return this.httpClient.get<PostComment[]>(
      `${environment.apiUrl}/comments?postId=${postId}`
    );
  }
}
