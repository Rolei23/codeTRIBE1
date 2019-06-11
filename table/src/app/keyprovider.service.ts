import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getComponentViewByInstance } from '@angular/core/src/render3/context_discovery';

@Injectable({
  providedIn: 'root'
})
export class KeyproviderService {

  constructor(private http:HttpClient) { }
  getNews() {return this.http.get("http://jsonplaceholder.typicode.com/users")}
}
