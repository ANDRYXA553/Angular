import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieListComponent} from './components/movie-list/movie-list.component';
import {MovieCardComponent} from './components/movie-list/movie-card/movie-card.component';
import {HeaderComponent} from './components/header/header.component';
import {GenresComponent} from './components/genres/genres.component';
import {RouterModule, Routes} from "@angular/router";
import {GenreItemComponent} from './components/genres/genre-item/genre-item.component';
import {MovieDetailsComponent} from './components/movie-list/movie-details/movie-details.component';
import {MainContainerComponent} from './components/main-container/main-container.component';
import {RatingModule} from "ngx-bootstrap/rating";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MoviesByGenreComponent} from './components/genres/movies-by-genre/movies-by-genre.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import { PaginationComponent } from './components/pagination/pagination.component';
import {FormsModule} from "@angular/forms";


const routes: Routes = [
  {path: '', component: MainContainerComponent,},
  {path: ':id', component: MovieDetailsComponent},
  {path: 'genre/:id', component: MoviesByGenreComponent},
  // {path: '?page:id', component: MainContainerComponent},

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
    MoviesByGenreComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), RatingModule, NgbModule, NgbRatingModule, YouTubePlayerModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
