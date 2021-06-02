import {Component, Input, OnInit} from '@angular/core';
import {CommentsInterface} from "../../../interfaces/commentsInterface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  @Input()
  comment: CommentsInterface


  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  showCommentDetails(): void {
    this.router.navigate([this.comment.id], {relativeTo: this.activatedRouter, state: this.comment})
  }

}
