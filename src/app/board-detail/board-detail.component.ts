import { Board } from '../shared/board.model';
import { BoardService } from '../shared/board.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-detail',
  templateUrl: './board-detail.component.html',
  styleUrls: ['./board-detail.component.css']
})
export class BoardDetailComponent implements OnInit {

  public loading: boolean;
  public id: string;
  public board: Board;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService
  ) { }

  ngOnInit() {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.boardService.getBoardById(id).subscribe((board: Board) => {
      this.board = board;
      this.loading = false;
    });
  }

}
