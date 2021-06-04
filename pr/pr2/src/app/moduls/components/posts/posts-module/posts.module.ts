import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import {PostsComponent} from "../components/posts.component";
import {PostComponent} from "../components/post/post.component";
import {PostDetailComponent} from "../components/post-detail/post-detail.component";


@NgModule({
  declarations: [
    PostsComponent,PostComponent,PostDetailComponent,PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
