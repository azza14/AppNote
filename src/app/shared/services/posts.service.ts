import { Injectable } from '@angular/core';
import {environment} from './../../../environments/environment';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { item } from '../models/item';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // httpOptions={
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json', 
  //     'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFiaGFyd29ya3MuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE1OTc0MTg2OTgsImV4cCI6MTU5NzQyMjI5OH0.2T5x8KtOnhfZ7ki3GKr-JBjCgUgSM8a56aIylz_ZxJg'
  //    })
  // };
  url="http://localhost:8000/posts";
  constructor(private http:HttpClient) { }
//Get AllPosts
public getPosts():Observable<item>{
  return this.http.get<item>(this.url);
}
// delete item 
delete(id)
{
  return this.http.delete(`${this.url}/${id}`);
}
//add
add(data){
  return this.http.post(`${this.url}`,data)
}
// get item 
get(id)
{
  return this.http.get<any>(`${this.url}/${id}`);
}
// update item
update(data,id)
{
  return this.http.put(`${this.url}/${id}`,data);
}
}
