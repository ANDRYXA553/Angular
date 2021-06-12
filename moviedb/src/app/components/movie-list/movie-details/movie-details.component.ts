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

  constructor(private indexService: IndexService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      console.log(value.id)
      this.indexService.getSingleMovie(value.id).subscribe(value1 => {
        this.movieItem = value1
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
