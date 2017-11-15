import { Router } from '@angular/router';
import { IBoard } from '../shared/board.interface';
import { Board } from '../shared/board.model';
import { Component, DoCheck, OnInit } from '@angular/core';
import { BoardService } from '../shared/board.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, DoCheck {

  boards: Board[];
  boardsFiltered: Board[];
  // boards$: Observable<Board[]>;
  // boardsFiltered$: Observable<Board[]>;

  constructor(private _boardService: BoardService, private router: Router, ) { }

  ngOnInit() {
    this._boardService.getAllBoards().subscribe((boards: Board[]) => {
      this.boards = boards;
      this.boardsFiltered = this._getFavBoards(this.boards);
    });

    // this.boardsFiltered$ = this.boards$.map((allBoards: Board[]) => {
    //   return allBoards.filter((board) => board.isStarred);
    // });
  }

  ngDoCheck() {
    this.boardsFiltered = this._getFavBoards(this.boards);
  }

  // public getFavBoards$(boards$: Observable<Board[]>): Observable<Board[]> {
  //   return boards$.map((allBoards: Board[]) => {
  //     return allBoards.filter((board) => board.isStarred);
  //   });
  // }

  public createNewBoard(): void {
    this._boardService.createNewBoard().subscribe((newBoard: Board) => {
      this._navigateToBoardDetail(newBoard);
    });
  }

  private _getFavBoards(boards: Board[]): Board[] {
    return (boards) ? boards.filter((board) => board.isStarred) : [];
  }

  private _navigateToBoardDetail(board: Board): void {
    this.router.navigate(['/board', board.id]);
  }

}
