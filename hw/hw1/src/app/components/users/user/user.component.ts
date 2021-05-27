import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/userInterface";
import {PostsService} from "../../../../services/posts.service";
import {PostInterface} from "../../models/postInterface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  posts: PostInterface[]
  @Input()
  user: User


  constructor(private postsFetch: PostsService) {
  }

  ngOnInit(): void {
    this.postsFetch.getPost(this.user.id).subscribe(value => {
      this.posts = value
    })
  }

}
