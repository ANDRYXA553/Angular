import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieItemInterface} from "../app/interface/movieItemInterface";
import {DataInterface} from "../app/interface/dataInterface";

@Injectable({
  providedIn: 'root'
})
export class IndexService {


  url = 'https://api.themoviedb.org/3'

  movieUrl = `${this.url}/movie`;
  genreUrl = `${this.url}/genre/movie/list`
  moviesUrl = `${this.url}/discover/movie`


  constructor(private httpClient: HttpClient) {
  }

  getMovies(page:number): Observable<DataInterface> {
    return this.httpClient.get<DataInterface>(this.moviesUrl, {
      params: {
        language: 'en_US',
        page: page
      }
    })
  }

  getGenres(): Observable<any> {
    return this.httpClient.get(this.genreUrl, {
      params: {
        language: 'en_US',
        page: 1
      }
    })
  }

  getSingleMovie(id: string): Observable<MovieItemInterface> {

    return this.httpClient.get<MovieItemInterface>(`${this.movieUrl}/${id}`, {
      params: {
        language: 'en_US',
        page: 1
      }
    })
  }

  getMoviesByGenre(genre_id: number,page:number): Observable<DataInterface> {
    return this.httpClient.get<DataInterface>(this.moviesUrl, {
      params: {
        language: 'en_US',
        page: page,
        with_genres: genre_id
      }
    })
  }
  getVideoOfMovie(movie_id: number):Observable<any>{
    return this.httpClient.get(`${this.movieUrl}/${movie_id}/videos`, {
      params: {
        language: 'en_US',
      }
    })
  }
}
