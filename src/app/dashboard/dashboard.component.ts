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
  boards$: Observable<Board[]>;

  constructor(private _boardService: BoardService) { }

  ngOnInit() {
    this._boardService.getAllBoardsMocked().subscribe((boards: Board[]) => {
      this.boards = boards;
    });

    this.boards$ = this._boardService.getAllBoardsMocked();
  }

  public getFavBoards(): Board[] {
    return this.boards.filter((board) => board.isStarred);
  }

}
