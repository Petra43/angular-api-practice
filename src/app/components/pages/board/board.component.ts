import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/services/board/board.service';
import { CurrentPageService } from 'src/app/services/current-page/current-page.service';
import { Board, Section } from 'src/app/types/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private boardId: number = 0;
  public board!: Board;

  constructor(
      private route: ActivatedRoute,
      private currentPage: CurrentPageService,
      private boardService: BoardService
    ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.boardId = id;
    this.boardService.getBoard(this.boardId)
    this.boardService.SelectedBoard$.subscribe( selectedBoard => this.board = selectedBoard)
  }

  addSection() {
    const newSection: Section = {
      title: "new section",
      tickets: []
    }

    this.boardService.createSection(newSection)
  }

  log() {
    console.log(this.board)
  }
}
