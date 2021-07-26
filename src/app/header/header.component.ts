import {Component, OnInit} from '@angular/core';
import {HomeService, Post} from "../home/home.service";
import {SubjectService} from "../services/subject.service";
import {PostsService} from "../services/posts.service";


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search: string = ''

  constructor(private subject: SubjectService) {
  }

  ngOnInit(): void {
  }

  searchInput$() {
    this.subject.searchSubject$.next(this.search)
  }

  clearInput() {
    this.search = ''
  }

}
