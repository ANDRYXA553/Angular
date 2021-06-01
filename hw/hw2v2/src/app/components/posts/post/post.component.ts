import {Component, Input, OnInit} from '@angular/core';
import {PostsInterface} from "../../../interface/PostsInterface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post:PostsInterface

  constructor() {
  }

  ngOnInit(): void {
  }

}
