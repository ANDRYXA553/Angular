import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../app/components/models/postInterface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  url:string='https://jsonplaceholder.typicode.com/posts?userId='
  constructor( private httpClient:HttpClient) {}

  getPost(userID:number){

   return  this.httpClient.get<PostInterface[]>(this.url+userID)
  }
}
