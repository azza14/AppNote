import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { item } from '../models/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  url="http://localhost:8000/notes";
  constructor(private http:HttpClient) { }
//Get All Notes
public getAll():Observable<item>{
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