import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieItemInterface} from "../app/interface/movieItemInterface";
import {DataInterface} from "../app/interface/dataInterface";

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  apiKey = 'e256ee3135492528a167dbf2f4a87df2'

  url = 'https://api.themoviedb.org/3'

  nowPlayingUrl = `${this.url}/movie/now_playing`
  topRatedUrl = `${this.url}/movie/top_rated`
  movieUrl = `${this.url}/movie`;
  genreUrl = `${this.url}/genre/movie/list`
  moviesUrl = `${this.url}/discover/movie`
  personUrl = `${this.url}/trending/person/week`


  constructor(private httpClient: HttpClient) {
  }

  getMovies(page:number): Observable<DataInterface> {
    return this.httpClient.get<DataInterface>(this.moviesUrl, {
      params: {
        api_key: this.apiKey,
        language: 'en_US',
        page: page
      }
    })
  }

  getGenres(): Observable<any> {
    return this.httpClient.get(this.genreUrl, {
      params: {
        api_key: this.apiKey,
        language: 'en_US',
        page: 1
      }
    })
  }

  getSingleMovie(id: string): Observable<MovieItemInterface> {

    return this.httpClient.get<MovieItemInterface>(`${this.movieUrl}/${id}`, {
      params: {
        api_key: this.apiKey,
        language: 'en_US',
        page: 1
      }
    })
  }

  getMoviesByGenre(genre_id: number): Observable<DataInterface> {
    return this.httpClient.get<DataInterface>(this.moviesUrl, {
      params: {
        api_key: this.apiKey,
        language: 'en_US',
        page: 1,
        with_genres: genre_id
      }
    })
  }
  getVideoOfMovie(movie_id: number):Observable<any>{
    return this.httpClient.get(`${this.movieUrl}/${movie_id}/videos`, {
      params: {
        api_key: this.apiKey,
        language: 'en_US',

      }
    })
  }
}
