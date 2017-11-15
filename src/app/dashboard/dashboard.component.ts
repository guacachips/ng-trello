import { IBoard } from '../shared/board.interface';
import { Board } from '../shared/board.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boards: Board[];

  constructor() { }

  ngOnInit() {

    this.boards = [
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

  public getFavBoards(): Board[] {
    return this.boards.filter((board) => board.isStarred);
  }

}
