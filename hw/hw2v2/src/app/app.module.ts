import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/users/user/user.component';
import {UsersDetailsComponent} from './components/users-details/users-details.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UsersDetailsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,

    RouterModule.forRoot([
      {path: 'users', component: UsersComponent, children: [{path: ':id', component: UsersDetailsComponent}]},
      {path:'posts',component:PostsComponent}

      ]

    )


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
