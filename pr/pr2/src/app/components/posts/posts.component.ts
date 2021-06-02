import { Component, OnInit } from '@angular/core';
import {PostInterface} from "../../interfaces/postInterface";
import {PostsService} from "../../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

   posts:PostInterface[]
  constructor(private postsService:PostsService) { }

  ngOnInit(): void {
     this.postsService.getPosts().subscribe(value => {
       this.posts=value
     })
  }

}
