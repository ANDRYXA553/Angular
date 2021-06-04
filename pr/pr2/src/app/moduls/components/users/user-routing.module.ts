import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserPostsComponent} from "./components/user-posts/user-posts.component";
import {UsersService} from "../../services/users/users.service";
import {UserPostsService} from "../../services/posts/user.posts.service";
import {UserService} from "../../services/users/user.service";

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    resolve: {data: UsersService}, children: [
      {path: 'posts/:id', resolve: {data: UserPostsService}, component: UserPostsComponent},
      {path: ':id', resolve: {data: UserService}, component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
