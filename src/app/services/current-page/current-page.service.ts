import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentPageService {

  public page: BehaviorSubject<string> = new BehaviorSubject<string>('no page')

  constructor() { }

  public setCurrentPage(title: string) {
    this.page.next(title);
  }
}
