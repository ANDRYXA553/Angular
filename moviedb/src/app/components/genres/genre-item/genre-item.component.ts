import {Component, Input, OnInit} from '@angular/core';
import {GenreInterface} from "../../../interface/genreInterface";
import {DataTransferService} from "../../../../services/data-transfer.service";
import {IndexService} from "../../../../services/index.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.css']
})
export class GenreItemComponent implements OnInit {
  @Input()
  genre: GenreInterface

  constructor(private dataTransfer: DataTransferService, private indexService: IndexService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }


  goToGenre(): void {
    if (this.router.url === '/') {
      this.router.navigate(['genre', this.genre.id], {relativeTo: this.activatedRoute, state: this.genre})
    } else {
      this.router.navigate(['genre', this.genre.id], {state: this.genre})
    }

  }


}
