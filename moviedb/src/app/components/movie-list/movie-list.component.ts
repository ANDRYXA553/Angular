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

  constructor(private indexService: IndexService, private activatedRoute: ActivatedRoute, private dataTransfer: DataTransferService) {

    activatedRoute.queryParams.subscribe(value => {
      //SET CURRENT PAGE IN DATA TRANSFER

      this.indexService.getMovies(value.page).subscribe(value => {
        this.dataTransfer.store.next({
          ...this.dataTransfer.store.getValue(),
          totalPages: value.total_pages,
          currentPage: dataTransfer.store.getValue().currentPage
        })

        //SET MOVIES TO ARR
        this.movieList = value.results

      })
    })
  }

  ngOnInit(): void {


  }


}
