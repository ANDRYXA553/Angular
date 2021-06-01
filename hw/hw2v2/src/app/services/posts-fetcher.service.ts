import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostsInterface} from "../interface/PostsInterface";

@Injectable({
  providedIn: 'root'
})
export class PostsFetcherService {
url:string='https://jsonplaceholder.typicode.com/posts'
  constructor(private PostsFetcher:HttpClient) { }
getPosts(){
   return  this.PostsFetcher.get<PostsInterface[]>(this.url)
}
getPost(id:string){
   return this.PostsFetcher.get<PostsInterface>(this.url+'/'+id)

}
}
