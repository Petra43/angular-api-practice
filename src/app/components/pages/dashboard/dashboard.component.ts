import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from 'src/app/services/board/board.service';
import { CurrentPageService } from 'src/app/services/current-page/current-page.service';
import { UserService } from 'src/app/services/user/user.service';
import { Board } from 'src/app/types/board';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public boardList: Board[] = []
  private user: User = { name: '', id: 0} // find a better way to define this

  constructor(
    private boardService: BoardService,
    private currentPage: CurrentPageService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.currentPage.setCurrentPage('Dashboard')
    this.userService.SignedInUser.subscribe( user => this.user = user)
    this.boardService.getBoards(this.user.id).subscribe( boards => this.boardList = boards )
  }

  // add a modal step to allow for name customization
  createBoard(): void{
    const board: Board = {
      ownerId: this.user.id,
      name: 'new board',
      sections: []
    }
    this.boardService.createBoard(board).subscribe( newBoard => this.router.navigate(['/board', newBoard.id]))
  }


}
