import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeService,} from "./home.service";
import {SubjectService} from "../services/subject.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  card: any
  search: any;
  subscription$: Subscription

  constructor(
    private HomeService: HomeService,
    private SubjectService: SubjectService
  ) {
    this.card = HomeService.postsCard
  }

  ngOnInit(): void {
    this.subscription$ = this.SubjectService.searchSubject$
      .subscribe(res => {
        this.search = res
      })
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }
}
