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
      new Board('Board 1'),
      new Board('Board 2'),
      new Board('Board 3')
    ];
  }

}
