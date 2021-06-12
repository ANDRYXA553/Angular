import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {IndexService} from "../../../services/index.service";
import {MovieItemInterface} from "../../interface/movieItemInterface";
import {DataTransferService} from "../../../services/data-transfer.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList: [MovieItemInterface]

  constructor(private indexService: IndexService, private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {

    this.indexService.getMovies().subscribe(value => {
      this.movieList = value.results
      this.dataTransfer.store.subscribe(value1 => {


      })
    })

  }


}
