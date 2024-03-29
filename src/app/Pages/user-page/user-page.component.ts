import { Component, OnInit } from '@angular/core';
import { PostService } from './../../Services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Interfaces/post';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  posts: Post[];
  subs: Subscription[] = [];
  userDetails: User | undefined;
  isLoading: boolean = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private userService: UserService
  ) {
    this.posts = [];
  }

  ngOnInit(): void {
    let routerSub = this.activatedRoute.params.subscribe(({ userId }) => {
      this.isLoading = true;
      let getUserDetailsSub = this.userService.Users$.subscribe((users) => {
        this.userDetails = users.find((user) => user.id == userId);
      });
      this.subs.push(getUserDetailsSub);

      let getUserPostsSub = this.postService
        .getUserPosts(userId)
        .subscribe((data) => {
          this.posts = data;
          setTimeout(() => {
            this.isLoading = false;
          }, 200);
        });
      this.subs.push(getUserPostsSub);
    });
    this.subs.push(routerSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
