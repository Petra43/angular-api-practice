import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { UserMessage } from 'src/app/types/user-message';

@Injectable({
  providedIn: 'root'
})
export class UserMessagingService {

  // I do not know if replay subject it the correct subject
  public messageSubject$: ReplaySubject<UserMessage> = new ReplaySubject();
  public showMessage$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  public logError(message: string) {
    const userMessage: UserMessage = {message: message, type: 'error'};
    this.messageSubject$.next(userMessage);
    this.showMessage$.next(true);
  }

  public logSuccess(message: string) {
    const userMessage: UserMessage = {message: message, type: 'success'};
    this.messageSubject$.next(userMessage);
    this.showMessage$.next(true);
    setTimeout( () => this.hideMessage(), 1500 );
  }

  public logInfo(message: string) {
    const userMessage: UserMessage = {message: message, type: 'info'};
    this.messageSubject$.next(userMessage);
    this.showMessage$.next(true);
  }

  public logWarning(message: string) {
    const userMessage: UserMessage = {message: message, type: 'warning'};
    this.messageSubject$.next(userMessage);
    this.showMessage$.next(true);
  }

  private hideMessage() {
    this.showMessage$.next(false);
  }
}


