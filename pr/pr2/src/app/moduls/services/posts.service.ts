import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../../interfaces/postInterface";
import {Observable} from "rxjs";
import {CommentsInterface} from "../../interfaces/commentsInterface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = 'https://jsonplaceholder.typicode.com/posts'
  usersPostsUrl: string = 'http://jsonplaceholder.typicode.com/posts?userId='
  commentsPostsUrl: string = 'https://jsonplaceholder.typicode.com/comments/?postId='

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(this.url)

  }

  getUsersPosts(id: string) {
    return this.httpClient.get<PostInterface[]>(`${this.usersPostsUrl}${id}`)
  }
  getCommentsById(id:string){
    return this.httpClient.get<CommentsInterface[]>(`${this.commentsPostsUrl}${id}`)
  }


}
