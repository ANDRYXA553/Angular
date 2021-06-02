import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentsInterface} from "../interfaces/commentsInterface";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolveService implements Resolve<CommentsInterface[]> {
  url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentsInterface[]>  {

    return this.getPosts();
  }


  getPosts(): Observable<CommentsInterface[]> {
    return this.httpClient.get<CommentsInterface[]>(this.url)
  }

  // getPost(id: string): Observable<CommentsInterface> {
  //   return this.httpClient.get<CommentsInterface>(this.url + '/' + id)
  // }


}
