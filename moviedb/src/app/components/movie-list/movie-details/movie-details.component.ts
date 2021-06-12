import {Component, OnInit} from '@angular/core';
import {MovieItemInterface} from "../../../interface/movieItemInterface";
import {IndexService} from "../../../../services/index.service";
import {ActivatedRoute} from "@angular/router";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  posterUrl = 'https://image.tmdb.org/t/p/original/'
  movieItem: MovieItemInterface
  rating: number

  constructor(private indexService: IndexService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.indexService.getSingleMovie(value.id).subscribe(value1 => {
        this.movieItem = value1

        this.rating = Math.round(value1.vote_average)
        this.movieItem = {
          ...this.movieItem,
          backdrop_path: `${this.posterUrl}${this.movieItem.backdrop_path}`,
          poster_path: `${this.posterUrl}${this.movieItem.poster_path}`
        }
      })
    })

  }

  ngOnInit(): void {

  }

}
