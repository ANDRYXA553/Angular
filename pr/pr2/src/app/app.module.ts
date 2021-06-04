import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {CommnetsComponent} from './moduls/components/commnets/commnets.component';
import {CommentDetailsComponent} from './moduls/components/commnets/comment/comment-details/comment-details.component';
import {CommentsResolveService} from "./moduls/components/commnets/services/comments.resolve.service";
import {CommentResolveService} from "./moduls/components/commnets/services/comment.resolve.service";
import { UserPostsComponent } from './moduls/components/users/components/user-posts/user-posts.component';
import { PostsCommentsComponent } from './moduls/components/posts/components/posts-comments/posts-comments.component';
import {CommentComponent} from "./moduls/components/commnets/comment/comment.component";


const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('./moduls/components/posts/posts-module/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./moduls/components/users/user.module').then(m => m.UserModule)
  },
  {
    path: 'comments',
    component: CommnetsComponent,
    resolve: {data: CommentsResolveService},
    children: [
      {path: ':id', component: CommentDetailsComponent, resolve: {data: CommentResolveService}}]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostsCommentsComponent,
    // UsersComponent,
    // PostsComponent,
    // PostComponent,
    // UserComponent,
    // PostDetailComponent,
    // UserDetailsComponent,
    CommnetsComponent,
    CommentComponent,
    CommentDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
