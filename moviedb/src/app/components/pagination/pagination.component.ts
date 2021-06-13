import {Component,  OnInit} from '@angular/core';
import {Params, Router} from "@angular/router";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  page = 1

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const queryParams: Params = {page: this.page};
    this.router.navigate([''], {queryParams: queryParams})
  }
  changePage(number: number) {
    if (!(this.page < 1)) {
      this.page = (this.page + number)
      const queryParams: Params = {page: this.page};
      this.router.navigate([''], {queryParams: queryParams})
    } else {
      this.page = 100
    }
  }

  changePageFromInput({target}: any) {
    this.page = +target.value
    const queryParams: Params = {page: this.page};
    this.router.navigate([''], {queryParams: queryParams})
  }
}
