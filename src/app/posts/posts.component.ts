import { Component, OnInit } from '@angular/core';
import {HomeService, Post} from "../home/home.service";
import {PostsService} from "../services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  card: any;

  constructor(private posts: PostsService) {
    this.card = posts.posts
  }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.card.splice(this.card.findIndex((e:any) => e.id === id), 1)
  }

}
