import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interface/UserInterface";

@Injectable({
  providedIn: 'root'
})
export class UsersFetcherService {
   url:string='https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient) { }
  getUsers(){
   return  this.httpClient.get<UserInterface[]>(this.url)
  }
}
