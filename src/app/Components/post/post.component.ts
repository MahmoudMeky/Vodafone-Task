import { Component, Input, OnInit } from '@angular/core';
import { Post } from './../../Interfaces/post';
import { CommentService } from 'src/app/Services/comment.service';
import { PostComment } from 'src/app/Interfaces/comment';
import { User } from 'src/app/Interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input('postInfo') postInformation!: Post;
  @Input('userDetails') userDetails!: User | undefined;
  areCommentsHidden: boolean = true;

  comments: PostComment[] | null;
  subs: Subscription[] = [];
  areCommentsLoading: boolean = false;
  constructor(private commentService: CommentService) {
    this.comments = null;
  }

  ngOnInit(): void {}
  showComments(): void {
    this.areCommentsLoading = true;
    this.areCommentsHidden = !this.areCommentsHidden;
    let getCommentsSub = this.commentService
      .getPostComments(this.postInformation.id)
      .subscribe((data) => {
        this.comments = data;
        this.areCommentsLoading = false;
      });
    this.subs.push(getCommentsSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
