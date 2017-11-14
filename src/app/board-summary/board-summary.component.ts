import { Board } from '../shared/board.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-summary',
  templateUrl: './board-summary.component.html',
  styleUrls: ['./board-summary.component.css']
})
export class BoardSummaryComponent implements OnInit {

  @Input() board: Board;
  isFavHover: boolean;

  constructor() { }

  ngOnInit() {
    this.isFavHover = false;
  }

  toggleIsStarred() {
    this.board.isStarred = !this.board.isStarred;
  }

  updateIsFavHoverTo(state: boolean) {
    this.isFavHover = (this.board.isStarred) ? true : state;
  }

}
