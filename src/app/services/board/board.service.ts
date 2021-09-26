import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseUrl, boardsUrl, sectionsUrl } from 'src/app/constants/URLs';
import { Board, Section } from 'src/app/types/board';

@Injectable({
  providedIn: 'root'
})
/**
 * handles interacting with the database board endpoint
 */
export class BoardService {

  public SelectedBoard$: BehaviorSubject<Board> = new BehaviorSubject<Board>({name: '', ownerId: 0, sections: []}); // should probably make board a class with default values

  constructor(
    private http: HttpClient
  ) { }

  public createBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(baseUrl + boardsUrl, board);
  }

  public updateBoard(board: Board): void {
    this.http.put<Board>(`${baseUrl}${boardsUrl}/${board.id}`, board)
      .subscribe(board => this.SelectedBoard$.next(board));
  }

  public getBoards (userId: number): Observable<Board[]> {
    return this.http.get<Board[]>(`${baseUrl}${boardsUrl}?ownerId=${userId}`);
  }

  public getBoard(boardId: number): void{
    this.http.get<Board>(`${baseUrl}${boardsUrl}/${boardId}`)
      .subscribe( board => this.SelectedBoard$.next(board));
  }

  // section db interactions -- may move to it's own service

  public createSection(section: Section): void {
    const boardId = this.SelectedBoard$.value.id
    const url: string = baseUrl + boardsUrl + '/' + boardId + sectionsUrl;

    this.http.post<Section>(url, section)
      .subscribe( section => {
        let board = this.SelectedBoard$.value
        board.sections.push(section);
        this.SelectedBoard$.next(board); // there could be an issue with copying references
      })
  }

  public deleteSection(sectionId: number): void {

  }

  // ticket db interactions -- may move to it's own service

  public createTicket(): void {

  }

  public updateTicket(): void {

  }

  public deleteTicket(): void {

  }

}
