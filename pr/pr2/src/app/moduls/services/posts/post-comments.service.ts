import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CommentsInterface} from "../../../interfaces/commentsInterface";
import {PostInterface} from "../../../interfaces/postInterface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostCommentsService implements Resolve<Observable<CommentsInterface[]>>{

  commentsPostsUrl: string = 'https://jsonplaceholder.typicode.com/comments/?postId='

  constructor(private httpClient:HttpClient) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CommentsInterface[]>  {

    return this.getCommentsById(route.params.id);
  }
  getCommentsById(id:string){
    return this.httpClient.get<CommentsInterface[]>(`${this.commentsPostsUrl}${id}`)
  }

}
