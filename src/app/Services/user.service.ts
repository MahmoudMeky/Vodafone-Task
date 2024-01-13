import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../Interfaces/user';
import {
  BehaviorSubject,
  Observable,
  catchError,
  retry,
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
      retry(3),
      catchError((err) => {
        alert('Error Occured!');
        return throwError(() => new Error(err));
      })
    );
  }

  setUsers(users: User[]): void {
    this.Users.next(users);
  }
}
