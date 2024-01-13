import { Component, OnInit } from '@angular/core';
import { PostService } from './../../Services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Interfaces/post';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  posts: Post[];
  subs: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.posts = [];
  }

  ngOnInit(): void {
    let routerSub = this.activatedRoute.params.subscribe(({ id }) => {
      let getUserPosts = this.postService.getUserPosts(id).subscribe((data) => {
        this.posts = data;
      });
      this.subs.push(getUserPosts);
    });
    this.subs.push(routerSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
