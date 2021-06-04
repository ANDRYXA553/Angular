import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "../components/posts.component";
import {PostDetailComponent} from "../components/post-detail/post-detail.component";
import {PostsCommentsComponent} from "../components/posts-comments/posts-comments.component";
import {UserPostsService} from "../../../services/posts/user.posts.service";
import {PostsService} from "../../../services/posts/posts.service";
import {PostService} from "../../../services/posts/post.service";

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    resolve: {data: PostsService},
    children: [{
      path: ':id',
      resolve: {data: PostService},
      component: PostDetailComponent
    }, {path: 'comments/:id', component: PostsCommentsComponent}]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
