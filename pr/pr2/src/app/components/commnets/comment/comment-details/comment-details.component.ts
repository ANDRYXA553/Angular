import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsInterface} from "../../../../interfaces/commentsInterface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  commentDetail: CommentsInterface

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.activatedRoute.data.subscribe(value1 => {
        this.commentDetail = value1.data
      })

    })

  }

  ngOnInit(): void {

  }

}
