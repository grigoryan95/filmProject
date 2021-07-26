import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
export interface Todo {
  userId?: number
  id: number
  title: string
  body:string
}
@Injectable({
  providedIn: 'root'
})
export class PostsService implements OnInit{
  posts:Todo[] = []

  constructor(private http:HttpClient) {
    this.getPosts()
  }
  getPosts() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(res => {
        this.posts = res
      })
  }

  ngOnInit(): void {
    console.log(this.posts)
  }
}



