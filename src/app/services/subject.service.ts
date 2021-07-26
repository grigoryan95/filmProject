import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }
  public searchSubject$: Subject<any> = new Subject();
}
