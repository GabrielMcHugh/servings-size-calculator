import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  appTitle: Subject<any> = new Subject<any>();

  constructor() { }

  appTitleChange(data: string) {
    this.appTitle.next(data)
  }
}
