import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserInterface} from "../../../interfaces/UserInterface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService implements Resolve<Observable<UserInterface>> {
  url: string = 'https://jsonplaceholder.typicode.com/users/'

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface> {
    return this.getUser(route.params.id)
  }

  getUser(id: string): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(this.url + id)
  }
}

