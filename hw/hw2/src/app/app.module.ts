import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {UsersComponent} from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,

    RouterModule.forRoot([{path: 'users', component: UsersComponent}])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
