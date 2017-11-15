import { IBoard } from './board.interface';
import { Board } from './board.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class BoardService {

  private _mockedBoards: IBoard[];

  constructor() {
    this._initMockedData();
  }

  private _initMockedData() {
    this._mockedBoards = [
      {
        id: '1',
        title: 'Board 1',
        backgroundColor: '#127abd',
        isStarred: true
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
        isStarred: true
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

}
