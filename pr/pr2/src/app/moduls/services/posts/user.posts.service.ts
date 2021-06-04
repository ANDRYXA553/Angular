import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {PostInterface} from "../../../interfaces/postInterface";

@Injectable({
  providedIn: 'root'
})
export class UserPostsService implements Resolve<Observable<PostInterface[]>>{
  usersPostsUrl: string = 'http://jsonplaceholder.typicode.com/posts?userId='

  constructor(private httpClient: HttpClient) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface[]> {
    return this.getUsersPosts(route.params.id);
  }

  getUsersPosts(id: string) {
    return this.httpClient.get<PostInterface[]>(`${this.usersPostsUrl}${id}`)
  }

}
