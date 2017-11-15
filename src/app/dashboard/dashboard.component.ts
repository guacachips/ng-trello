import { IBoard } from '../shared/board.interface';
import { Board } from '../shared/board.model';
import { Component, OnInit } from '@angular/core';
import { BoardService } from '../shared/board.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  boards: Board[];
  boardsStarred: Board[];
  boards$: Observable<Board[]>;
  boardsStarred$: Observable<Board[]>;

  constructor(private boardService: BoardService) { }

  ngOnInit() {

    // this.boardService.getAllBoardsMocked().subscribe((data: Board[]) => {
    //   this.boards = data;
    //   this.boardsStarred = this._getFavBoards(data);
    // });

    // this.boardService.getAllBoards().subscribe((data: Board[]) => {
    //   this.boards = data;
    //   this.boardsStarred = this._getFavBoards(data);
    // });

    this.boards$ = this.boardService.getAllBoards();
    this.boardsStarred$ = this._getFavBoards(this.boards$);
  }

  public getFavBoards(boards: Board[]): Board[] {
    return boards.filter((board) => board.isStarred);
  }

  private _getFavBoards(boards$: Observable<Board[]>): Observable<Board[]> {
    return boards$.map(data => {
      return data.filter((board) => board.isStarred);
    });
  }

}
