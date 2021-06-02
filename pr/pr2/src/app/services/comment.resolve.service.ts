import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {CommentsInterface} from "../interfaces/commentsInterface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LogicalFileSystem} from "@angular/compiler-cli/src/ngtsc/file_system";

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<CommentsInterface> {
  url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private httpClient: HttpClient) {
  }

  getPost(id: string): Observable<CommentsInterface> {
    return this.httpClient.get<CommentsInterface>(`${this.url}/${id}`)
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot,): Observable<CommentsInterface> {
    return this.getPost(route.params.id);
  }

}
