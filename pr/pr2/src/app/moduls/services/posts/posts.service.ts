import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../../../interfaces/postInterface";
import {Observable} from "rxjs";
import {CommentsInterface} from "../../../interfaces/commentsInterface";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PostsService implements Resolve<Observable<PostInterface[]>>{
  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface[]>  {

    return this.getPosts();
  }
  getPosts(): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(this.url)

  }




}
