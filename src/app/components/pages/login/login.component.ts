import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from 'src/app/services/current-page/current-page.service';
import { UserMessagingService } from 'src/app/services/user-messaging/user-messaging.service';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
/**
 * allows  existing users to log in and the creation of new users
 * Is insecure for the sake of simplicity in this practice app
 */
export class LoginComponent implements OnInit {

  public isCreateUser: boolean = false;
  public username: string = '';

  constructor(
    private messageService: UserMessagingService,
    private userService: UserService,
    private currentPage: CurrentPageService) { }

  ngOnInit(): void {
    this.currentPage.setCurrentPage('Login')
  }

  /**
   * Check if the username exists and is long enough
   */
  private async nameIsValid() {
    let isValid = true;
    let message = ''

    if (this.username.length < 3) {
      isValid = false;
      message = 'username is to short'
    } else if (await this.userExists()) {
      isValid = false;
      message = `username ${this.username} already exists`
    }

    return { isValid: isValid, message: message}
  }

  private async userExists(): Promise<boolean> {
    let users: User[] = []
    users = await this.userService.getUsers()
    return users.filter(user =>
      user.name === this.username
        ).length != 0
  }

  public async createUser() {

    const userValidation = await this.nameIsValid()

    if (userValidation.isValid) {
      await this.userService.createUser(this.username);
      this.messageService.logSuccess(`created user: ${this.username}`);
      await this.userService.login(this.username)
    } else {
      this.messageService.logError(userValidation.message);
    }
  }

  public async login() {

    let exists = await this.userExists();
    console.log(exists);
    if (exists) {
      this.userService.login(this.username)
      this.messageService.logSuccess(`logged in with user: ${this.username}`)
    } else {
      this.messageService.logError(`User: ${this.username} does not exist`)
    }
  }

}
