import { Component, Input } from '@angular/core';
import { PostComment } from 'src/app/Interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() commentDetails!: PostComment;
}
