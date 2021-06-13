import {Component, OnInit} from '@angular/core';
import {IndexService} from "../../../services/index.service";
import {MovieItemInterface} from "../../interface/movieItemInterface";
import {DataTransferService} from "../../../services/data-transfer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: [MovieItemInterface]

  constructor(private indexService: IndexService, private activatedRoute: ActivatedRoute) {
    activatedRoute.queryParams.subscribe(value => {
      this.indexService.getMovies(value.page).subscribe(value => {
        this.movieList = value.results
        console.log(value)

      })
    })
  }

  ngOnInit(): void {



  }


}
