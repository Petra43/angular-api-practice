import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggedInGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userLoggedIn: boolean = false
      this.userService.SignedInUser.subscribe(user => user? userLoggedIn = true : userLoggedIn = false);

      if(!userLoggedIn) {
        this.router.navigate(['login'])
        console.log('rerouting')
      }

    return userLoggedIn
  }

}
