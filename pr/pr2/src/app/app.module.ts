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


const routes: Routes = [
  {path: 'posts', component: PostsComponent, children: [{path: ':id', component: PostDetailComponent}]},
  {path: 'users', component: UsersComponent, children: [{path: ':id', component: UserDetailsComponent}]}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PostComponent,
    UserComponent,
    PostDetailComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
