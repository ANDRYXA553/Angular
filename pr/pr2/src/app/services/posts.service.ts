import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../interfaces/postInterface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(this.url)

  }
}
