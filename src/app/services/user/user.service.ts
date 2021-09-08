import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {Subject, ReplaySubject } from 'rxjs';
import { baseUrl, usersUrl } from 'src/app/constants/URLs';
import { User } from 'src/app/types/user';
import { UserMessagingService } from '../user-messaging/user-messaging.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public SignedInUser: Subject<User> = new ReplaySubject()

  constructor(
    private http: HttpClient,
    private messageService: UserMessagingService,
    private router: Router
  ) { }

  public getUsers() {
    return this.http.get<User[]>(baseUrl + usersUrl).toPromise()
    // using toPromise could be an anti-patten
  }

  // should always return one result but it is in an array
  public async getUser(name: string): Promise<User[]>{
    return this.http.get<User[]>(`${baseUrl}${usersUrl}?name=${name}`).toPromise();
  }

  public async createUser(user: User){
    const newUser = await this.http.post<User>(baseUrl + usersUrl, user).toPromise();
    return newUser
  }

  public async login(name: string) {
    let user = await this.getUser(name)

    await this.SignedInUser.next(user[0])
    this.router.navigate(['dashboard'])
  }

  public logout() {
    this,this.SignedInUser.next(undefined)
  }

}
