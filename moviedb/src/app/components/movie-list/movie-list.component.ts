import {Component, OnInit} from '@angular/core';
import {IndexService} from "../../../services/index.service";
import {MovieItemInterface} from "../../interface/movieItemInterface";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  movieList: [MovieItemInterface]

  constructor(private indexService: IndexService) {
  }

  ngOnInit(): void {
    this.indexService.getMovies().subscribe(value => {
      this.movieList = value.results
    })
  }


}
