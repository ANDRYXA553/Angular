import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/posts/post/post.component';
import {UserComponent} from './components/users/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {PostDetailComponent} from './components/posts/post-detail/post-detail.component';
import {UserDetailsComponent} from './components/users/user-details/user-details.component';
import {CommnetsComponent} from './components/commnets/commnets.component';
import {CommentComponent} from './components/commnets/comment/comment.component';
import {CommentDetailsComponent} from './components/commnets/comment/comment-details/comment-details.component';
import {CommentsResolveService} from "./services/comments.resolve.service";
import {CommentResolveService} from "./services/comment.resolve.service";


const routes: Routes = [
  {path: 'posts', component: PostsComponent, children: [{path: ':id', component: PostDetailComponent}]},
  {path: 'users', component: UsersComponent, children: [{path: ':id', component: UserDetailsComponent}]},
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
    UsersComponent,
    PostsComponent,
    PostComponent,
    UserComponent,
    PostDetailComponent,
    UserDetailsComponent,
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
