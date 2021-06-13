import {Component, OnInit} from '@angular/core';
import {MovieItemInterface} from "../../../interface/movieItemInterface";
import {IndexService} from "../../../../services/index.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  posterUrl = 'https://image.tmdb.org/t/p/original/'
  movieItem: MovieItemInterface
  rating: number
  trailerID:any

  constructor(private indexService: IndexService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.indexService.getSingleMovie(value.id).subscribe(value1 => {

        //SET RATING
        this.rating = Math.round(value1.vote_average)

        //SET MOVIE ITEM
        this.movieItem = value1
        this.movieItem = {
          ...this.movieItem,
          backdrop_path: `${this.posterUrl}${this.movieItem.backdrop_path}`,
          poster_path: `${this.posterUrl}${this.movieItem.poster_path}`}

        //SET TRAILER ID
        this.indexService.getVideoOfMovie(+this.movieItem.id).subscribe(value =>{
          this.trailerID=value.results[0].key
        } )
      })
    })
  }

  ngOnInit(): void {
  }

}
