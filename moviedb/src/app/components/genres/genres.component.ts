import {Component, OnInit} from '@angular/core';
import {IndexService} from "../../../services/index.service";
import {GenreInterface} from "../../interface/genreInterface";
import {DataTransferService} from "../../../services/data-transfer.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: GenreInterface[]


  constructor(private indexService: IndexService ) {
  }

  ngOnInit(): void {

    this.indexService.getGenres().subscribe(value => {
      this.genres = value.genres
    })
  }


}
