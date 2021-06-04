import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../../../interfaces/postInterface";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService implements Resolve<Observable<PostInterface>> {
  url: string = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(private httpClient: HttpClient) {


  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostInterface> {

    return this.getPost(route.params.id);
  }

  getPost(id: string) {
    return this.httpClient.get<PostInterface>(`${this.url}${id}`)
  }
}
