import { Component, OnInit } from '@angular/core';
import {PostInterface} from "../../interfaces/postInterface";
import {PostsFetchService} from "../services/posts-fetch.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

   posts:PostInterface[]
  constructor(private postsFetcher:PostsFetchService) { }

  ngOnInit(): void {
     this.postsFetcher.getPosts().subscribe(value => {
       this.posts=value
     })
  }

}
