import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IndexService} from "../../../../services/index.service";
import {MovieItemInterface} from "../../../interface/movieItemInterface";
import {DataTransferService} from "../../../../services/data-transfer.service";
import {LogicalFileSystem} from "@angular/compiler-cli/src/ngtsc/file_system";

@Component({
  selector: 'app-movies-by-genre',
  templateUrl: './movies-by-genre.component.html',
  styleUrls: ['./movies-by-genre.component.css']
})
export class MoviesByGenreComponent implements OnInit {
  moviesByGenre: MovieItemInterface[]
  genreId: number
  genreName:string

  constructor(private activatedRoute: ActivatedRoute, private IndexService: IndexService, private dataTransfer: DataTransferService) {


    this.activatedRoute.params.subscribe(value => {
      //SET GENRE ID
      this.genreId = +value.id

      this.activatedRoute.queryParams.subscribe(value1 => {

        //SET GENRE PAGE IN DATA TRANSFER


        const page = dataTransfer.store.getValue().currentPage

        //SET MOVIE FILTERED BY GENRE
        this.IndexService.getMoviesByGenre(this.genreId, page).subscribe(value => {
          dataTransfer.store.next({...this.dataTransfer.store.getValue(),currentPage: value1.page, totalPages: value.total_pages})
          this.moviesByGenre = value.results
         dataTransfer.store.subscribe(value=>{
           this.genreName =value.genreName
         })

        })

      })

    })
  }

  ngOnInit(): void {
  }

}
