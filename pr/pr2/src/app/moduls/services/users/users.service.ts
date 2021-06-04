import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../../../interfaces/UserInterface";
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements Resolve<Observable<UserInterface[]>> {
  url: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface[]> {
    return this.getUsers()
  }

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(this.url)
  }

}
