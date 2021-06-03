import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../../../services/users.service";
import {PostsService} from "../../../../services/posts.service";
import {PostInterface} from "../../../../../interfaces/postInterface";
import {getLocaleFirstDayOfWeek} from "@angular/common";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  postsDetail: PostInterface[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postsService: PostsService) {

    this.activatedRoute.params.subscribe(value => {

      this.postsService.getUsersPosts(value.id).subscribe(value1 => {
        this.postsDetail=value1
      })
    })
  }

  ngOnInit(): void {

  }

}
