import { Board } from '../shared/board.model';
import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../shared/board.service';

@Component({
  selector: 'app-board-summary',
  templateUrl: './board-summary.component.html',
  styleUrls: ['./board-summary.component.css']
})
export class BoardSummaryComponent implements OnInit {

  @Input() board: Board;
  isFavHover: boolean;

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.isFavHover = false;
  }

  updateIsFavHoverTo(state: boolean) {
    this.isFavHover = (this.board.isStarred) ? true : state;
  }

  toggleIsStarred() {
    this._toggleIsStarred();
    this.boardService.updateIsStarredState(this.board).subscribe(
      () => this._boardUpdatedSuccess(),
      (error) => this._boardUpdatedError()
    );
  }

  _boardUpdatedSuccess(): void {
    console.log('Board updated');
  }

  _boardUpdatedError(): void {
    this._toggleIsStarred();
  }

  _toggleIsStarred() {
    this.board.isStarred = !this.board.isStarred;
  }

}
