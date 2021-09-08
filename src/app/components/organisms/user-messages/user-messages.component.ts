import { Component, OnInit } from '@angular/core';
import { UserMessagingService } from 'src/app/services/user-messaging/user-messaging.service';
import { MessageType } from 'src/app/types/user-message';

@Component({
  selector: 'app-user-messages',
  templateUrl: './user-messages.component.html',
  styleUrls: ['./user-messages.component.scss']
})

/**
 * display messages to the user
 * message types
 * - info: blue
 * - success: green
 * - error: red
 * - warning: orange
 */
export class UserMessagesComponent implements OnInit {

  public message: string = '';
  public type: MessageType = 'error';
  public showMessage: boolean = false;

  constructor( private messageService: UserMessagingService) { }

  ngOnInit(): void {
    this.messageService.messageSubject$.subscribe( message => {
      this.message = message.message
      this.type = message.type
    })
    this.messageService.showMessage$.subscribe( show => this.showMessage = show )

  }



}
