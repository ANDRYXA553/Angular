import {Component, OnInit} from '@angular/core';
import {PostsFetcherService} from "../../services/posts-fetcher.service";
import {PostsInterface} from "../../interface/PostsInterface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: PostsInterface[]

  constructor(private postsService: PostsFetcherService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => {
      this.posts = value

    })
  }

}
