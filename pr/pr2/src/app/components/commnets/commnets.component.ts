import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsInterface} from "../../interfaces/commentsInterface";

@Component({
  selector: 'app-commnets',
  templateUrl: './commnets.component.html',
  styleUrls: ['./commnets.component.css']
})
export class CommnetsComponent implements OnInit {

  comments: CommentsInterface[]

  constructor(private activatedRoutes: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoutes.data.subscribe(value => {

      this.comments = value.data
    })
  }

}
