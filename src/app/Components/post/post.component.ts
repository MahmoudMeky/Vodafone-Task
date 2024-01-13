import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Post } from './../../Interfaces/post';
import { CommentService } from 'src/app/Services/comment.service';
import { PostComment } from 'src/app/Interfaces/comment';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Interfaces/user';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input('postInfo') postInformation!: Post;
  areCommentsHidden: boolean = true;

  comments: PostComment[] | null;
  userDetails: User | undefined;
  subs: Subscription[] = [];

  constructor(
    private commentService: CommentService,
  ) {
    this.comments = null;
  }

  showComments(): void {
    this.areCommentsHidden = !this.areCommentsHidden;
    // To Be removed After caching API Calls
    if (this.comments) {
      return;
    }
    ////////////////////////////////////////////
    let getCommentsSub = this.commentService
      .getPostComments(this.postInformation.id)
      .subscribe((data) => {
        this.comments = data;
      });
    this.subs.push(getCommentsSub);
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
