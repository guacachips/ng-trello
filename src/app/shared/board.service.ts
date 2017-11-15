import { IBoard } from './board.interface';
import { Board } from './board.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class BoardService {

  private _api: string;

  private _mockedBoards: IBoard[];

  constructor(private http: HttpClient) {
    this._init();
    this._initMockedData();
  }

  private _init() {
    this._api = 'http://ng-trello.azurewebsites.net/api';
  }

  private _initMockedData() {
    this._mockedBoards = [
      {
        id: '1',
        title: 'Board 1',
        backgroundColor: '#127abd',
        isStarred: false
      },
      {
        id: '2',
        title: 'Board 2',
        backgroundColor: '#127abd',
        isStarred: false
      },
      {
        id: '3',
        title: 'Board 3',
        backgroundColor: '#127abd',
        isStarred: false
      },
      {
        id: '4',
        title: 'Board 4',
        backgroundColor: '#127abd',
        isStarred: false
      }
    ];
  }

  getAllBoardsMocked(): Observable<Board[]> {
    return Observable.of(this._mockedBoards.map(board => new Board(board)));
  }

  getAllBoards(): Observable<Board[]> {
    const url = `${this._api}/boards`;
    return this.http.get(url).map((data: IBoard[]) => {
      return data.map((board: IBoard) => new Board(board));
    });
  }

}
