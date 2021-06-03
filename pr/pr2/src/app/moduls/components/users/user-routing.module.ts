import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserPostsComponent} from "./components/user-posts/user-posts.component";

const routes: Routes = [
  {
    path: '', component: UsersComponent, children: [
      {path: 'posts/:id', component: UserPostsComponent},
      {path: ':id', component: UserDetailsComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
