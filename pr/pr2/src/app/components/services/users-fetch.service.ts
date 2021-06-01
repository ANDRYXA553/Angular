import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../../interfaces/UserInterface";

@Injectable({
  providedIn: 'root'
})
export class UsersFetchService {
  url: string = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {
  }

  getUsers() {
    return this.httpClient.get<UserInterface[]>(this.url)
  }
  getUser(id:string){
    return this.httpClient.get<UserInterface>(this.url+'/'+id)
  }
}
