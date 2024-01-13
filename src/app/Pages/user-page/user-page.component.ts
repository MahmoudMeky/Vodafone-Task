import { Component, OnInit } from '@angular/core';
import { PostService } from './../../Services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Interfaces/post';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  posts: Post[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.postService.getUserPosts(id).subscribe((data) => {
        this.posts = data;
      });
    });
  }
}
