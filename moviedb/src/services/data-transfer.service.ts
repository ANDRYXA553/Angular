import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  store = new BehaviorSubject(
    {
      currentPage:1,
      totalPages:1
    })

  constructor() {
  }
}
