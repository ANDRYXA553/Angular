import {Component, Input, OnInit} from '@angular/core';
import {MovieItemInterface} from "../../../interface/movieItemInterface";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  posterUrl = 'https://image.tmdb.org/t/p/original/'
  @Input()
  movieItem: MovieItemInterface
  rating:number
  constructor() {
  }

  ngOnInit(): void {
    this.movieItem = {
      ...this.movieItem,
      backdrop_path: `${this.posterUrl}${this.movieItem.backdrop_path}`,
      poster_path: `${this.posterUrl}${this.movieItem.poster_path}`
    }
    this.rating = Math.round(this.movieItem.vote_average)

  }

}
