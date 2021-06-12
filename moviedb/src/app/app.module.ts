import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AlertModule} from "ngx-bootstrap/alert";
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieCardComponent} from './components/movie-list/movie-card/movie-card.component';
import {HeaderComponent} from './components/header/header.component';
import {GenresComponent} from './components/genres/genres.component';
import {RouterModule, Routes} from "@angular/router";
import {GenreItemComponent} from './components/genres/genre-item/genre-item.component';
import {MovieDetailsComponent} from './components/movie-list/movie-details/movie-details.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import {RatingModule} from "ngx-bootstrap/rating";



const routes: Routes = [
  {path: 'home',component:MainContainerComponent},
  {path: ':id', component: MovieDetailsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieCardComponent,
    HeaderComponent,
    GenresComponent,
    GenreItemComponent,
    MovieDetailsComponent,
    MainContainerComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), RatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
