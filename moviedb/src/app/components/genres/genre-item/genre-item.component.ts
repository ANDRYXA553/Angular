import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GenreInterface} from "../../../interface/genreInterface";
import {DataTransferService} from "../../../../services/data-transfer.service";

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {
  @Input()
  genre: GenreInterface


  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {
  }

  setGenreId(): void {
    console.log(this.dataTransfer.store.getValue())
  }
}
