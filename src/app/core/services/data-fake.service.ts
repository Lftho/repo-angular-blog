import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { blog } from '../model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class DataFakeService {
  baseUrl = "http://localhost:3000/heroes";
  baseUrl2 = "http://localhost:3000/newBackgroundHeroes";

  constructor(private http: HttpClient) { }

  getBlogHeroes() {
    return this.http.get<blog[]>(this.baseUrl);
  }

  addBlogHero(blog: blog) {
    return this.http.post(this.baseUrl, blog);
  }


  getBlogBackgroundHeroes() {
    return this.http.get<blog[]>(this.baseUrl2);
  }

  addBlogBackgroundHero(blog: blog) {
    return this.http.post(this.baseUrl2, blog);
  }
}
