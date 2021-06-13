import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IndexService} from "../../../../services/index.service";
import {MovieItemInterface} from "../../../interface/movieItemInterface";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  moviesByGenre: MovieItemInterface[]
  genreId: number

  constructor(private activatedRoute: ActivatedRoute, private IndexService: IndexService) {
    this.activatedRoute.params.subscribe(value => {
      //SET GENRE ID
      this.genreId = +value.id

      //SET MOVIE FILTERED BY GENRE
      this.IndexService.getMoviesByGenre(this.genreId).subscribe(value => {
        this.moviesByGenre = value.results
      })
    })
  }

  ngOnInit(): void {
  }

}
