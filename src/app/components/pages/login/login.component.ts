import { Component, OnInit } from '@angular/core';
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
    private userService: UserService) { }

  ngOnInit(): void {
  }

  /**
   * Check if the username exists and is long enough
   */
  private nameIsValid() {
    let isValid = true;
    let message = ''

    if (this.username.length < 3) {
      isValid = false;
      message = 'username is to short'
    } else if (this.userExists()) {
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

  public createUser() {

    const userValidation = this.nameIsValid()

    if (userValidation.isValid) {
      this.userService.createUser({name: this.username});
      this.messageService.logInfo(`created user: ${this.username}`);
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
