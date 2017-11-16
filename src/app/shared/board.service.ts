import { HttpClient } from '@angular/common/http';
import { IBoard } from './board.interface';
import { Board } from './board.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BoardService {

  private _api: string;
  private _mockedBoards: IBoard[];

  constructor(private http: HttpClient) {
    this._init();
  }

  _init(): void {
    this._api = 'http://ng-trello.azurewebsites.net/api';
  }

  getBoardById(boardId: string): Observable<Board> {
    const url = `${this._api}/boards/${boardId}`;
    return this.http.get(url).map((data: IBoard) => new Board(data));
  }

  getAllBoards(): Observable<Board[]> {
    const url = `${this._api}/boards`;
    return this.http.get(url).map((data: IBoard[]) => {
      return data.map((board: IBoard) => new Board(board));
    });
  }

  getAllBoardsMocked(): Observable<Board[]> {
    return this.http.get('/mocks/board.mock.json').map((data: IBoard[]) => {
      return data.map((board: IBoard) => new Board(board));
    });
  }

  updateIsStarredState(board: Board) {
    const url = `${this._api}/boards/${board.id}`;
    return this.http.patch(url, { 'isStarred': board.isStarred });
  }

  updateTitle(id: string, title: string) {
    const url = `${this._api}/boards/${id}`;
    return this.http.patch(url, { 'title': title });
  }

  createNewBoard(): Observable<Board> {
    const url = `${this._api}/boards`;
    const body = { title: 'ngHi!' };
    return this.http.post(url, body).map((newBoard: IBoard) => new Board(newBoard));
  }

}
