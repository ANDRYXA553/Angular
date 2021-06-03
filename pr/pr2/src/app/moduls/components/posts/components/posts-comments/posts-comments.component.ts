import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../../services/posts.service";
import {CommentsInterface} from "../../../../../interfaces/commentsInterface";

@Component({
  selector: 'app-posts-comments',
  templateUrl: './posts-comments.component.html',
  styleUrls: ['./posts-comments.component.css']
})
export class PostsCommentsComponent implements OnInit {

  postsComments:CommentsInterface[]
  constructor(private activatedRoute:ActivatedRoute,private postsService:PostsService) {
    this.activatedRoute.params.subscribe(value => {

      this.postsService.getCommentsById(value.id).subscribe(value1 => {
        this.postsComments=value1
      })
    })
  }

  ngOnInit(): void {
  }

}
