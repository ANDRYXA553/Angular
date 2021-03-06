import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../../../../interfaces/postInterface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input()
  post: PostInterface

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(value => {
      this.activatedRoute.data.subscribe(value1 => {
        this.post  = value1.data
      })

    })
    //   this.activatedRoute.params.subscribe(value => {
    //
    //     this.post = this.router.getCurrentNavigation()?.extras.state as PostInterface
    //   })
  }

  ngOnInit(): void {

  }

}
