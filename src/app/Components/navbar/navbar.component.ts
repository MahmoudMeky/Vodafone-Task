import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './../../Services/user.service';
import { User } from 'src/app/Interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
  ) {}
  users: User[] = [];
  subs: Subscription[] = [];

  ngOnInit(): void {
    let getUsersSub = this.userService.getAll().subscribe((data) => {
      this.users = data;
    });
    this.subs.push(getUsersSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
