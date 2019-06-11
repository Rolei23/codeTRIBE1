import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class KeyproviderService {

  constructor(private http:HttpClient ) { } 
  getNews() {
   return this.http.get("http://jsonplaceholder.typicode.com/users");
  }
}
