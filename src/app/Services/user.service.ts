import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Interfaces/user';
import {
  BehaviorSubject,
  Observable,
  catchError,
  retry,
  tap,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private Users = new BehaviorSubject<User[]>([]);
  Users$: Observable<User[]> = this.Users.asObservable();
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.apiUrl}/users`).pipe(
      tap((response) => {
        this.Users.next(response);
      })
    );
  }
}
