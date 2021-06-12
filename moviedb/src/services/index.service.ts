import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable, Observer} from "rxjs";
import {MovieItemInterface} from "../app/interface/movieItemInterface";
import {DataInterface} from "../app/interface/dataInterface";

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  apiKey = 'e256ee3135492528a167dbf2f4a87df2'

  url = 'https://api.themoviedb.org/3'

  nowPlayingUrl = `${this.url}/movie/now_playing`

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<DataInterface> {
    return this.httpClient.get<DataInterface>(this.nowPlayingUrl, {
      params: {
        api_key: this.apiKey,
        language: 'en_US',
        page: 1
      }
    })

  }

}
