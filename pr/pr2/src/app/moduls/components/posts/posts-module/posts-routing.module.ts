import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "../components/posts.component";
import {PostDetailComponent} from "../components/post-detail/post-detail.component";
import {PostsCommentsComponent} from "../components/posts-comments/posts-comments.component";

const routes: Routes = [
  {path: '', component: PostsComponent, children: [{path: ':id', component: PostDetailComponent},{path:'comments/:id',component:PostsCommentsComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
