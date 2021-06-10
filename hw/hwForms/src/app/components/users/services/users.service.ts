import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interface/user";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(this.url)
  }

}
