import { Component, Input } from '@angular/core';
import { Post } from './../../Interfaces/post';
import { CommentService } from 'src/app/Services/comment.service';
import { PostComment } from 'src/app/Interfaces/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input('postInfo') postInformation!: Post;
  areCommentsHidden: boolean = true;

  comments: PostComment[] | null;
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
    this.commentService
      .getPostComments(this.postInformation.id)
      .subscribe((data) => {
        this.comments = data;
      });
  }
}
