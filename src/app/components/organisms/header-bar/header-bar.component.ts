import { Component, OnInit } from '@angular/core';
import { CurrentPageService } from 'src/app/services/current-page/current-page.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss']
})
export class HeaderBarComponent implements OnInit {

  constructor(
    private userService: UserService,
    private currentPage: CurrentPageService
    ){ }

  public showLogoutBtn: boolean = false
  public pageTitle: string = ''

  ngOnInit(): void {
    this.userService.SignedInUser.subscribe(user => {
      user != undefined ? this.showLogoutBtn = true : this.showLogoutBtn = false;
    })
    this.currentPage.page.subscribe( title => this.pageTitle = title )
  }

  public logout() {
    this.userService.logout()
  }

}
