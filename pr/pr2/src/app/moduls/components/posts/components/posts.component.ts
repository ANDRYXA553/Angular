import { Component, OnInit } from '@angular/core';
import {PostInterface} from "../../../../interfaces/postInterface";
import {PostsService} from "../../../services/posts/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts:PostInterface[]
  constructor(private activatedRoutes:ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoutes.data.subscribe(value => {

      this.posts = value.data
    })
     // this.postsService.getPosts().subscribe(value => {
     //   this.posts=value
     // })
  }

}
