import { Component, OnInit } from '@angular/core';
import { UserService } from './../../Services/user.service';
import { User } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: User[] = [];
  ngOnInit(): void {
    this.userService.getAll().subscribe((data) => (this.users = data));
  }
}
