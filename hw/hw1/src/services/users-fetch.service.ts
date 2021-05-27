import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../app/components/models/userInterface";

@Injectable({
  providedIn: 'root'
})
export class UsersFetchService {

  url:string='https://jsonplaceholder.typicode.com/users';
  constructor(private HttpClient:HttpClient) { }
  getUsers(){
   return  this.HttpClient.get<User[]>(this.url)

  }
}
