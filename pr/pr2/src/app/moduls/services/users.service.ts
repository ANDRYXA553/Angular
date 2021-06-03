import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../../interfaces/UserInterface";
import {Observable} from "rxjs";

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

  getUser(id: string): Observable<UserInterface> {
    return this.httpClient.get<UserInterface>(this.url + '/' + id)
  }
}
