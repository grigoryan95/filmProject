import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../posts.service";
import {SubjectService} from "../services/subject.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit, OnDestroy {

  subscription$: Subscription
  posts: any
  search: any;

  constructor(
    private PostsService: PostsService,
    private sub: SubjectService
  ) {
    this.posts = PostsService.posts
  }

  ngOnInit(): void {
    this.subscription$ = this.sub.searchSubject$
      .subscribe(res => {
        this.search = res
      })
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }


}
