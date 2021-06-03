import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UsersComponent} from "./components/users.component";
import {UserComponent} from "./components/user/user.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserPostsComponent} from "./components/user-posts/user-posts.component";


@NgModule({
  declarations: [UsersComponent,UserComponent,UserDetailsComponent,UserPostsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
