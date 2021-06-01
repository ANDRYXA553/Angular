import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../../interfaces/postInterface";

@Injectable({
  providedIn: 'root'
})
export class PostsFetchService {
  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  getPosts() {
    return this.httpClient.get<PostInterface[]>(this.url)

  }
}
