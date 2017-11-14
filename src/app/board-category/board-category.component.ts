import { Board } from '../shared/board.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-category',
  templateUrl: './board-category.component.html',
  styleUrls: ['./board-category.component.css']
})
export class BoardCategoryComponent implements OnInit {

  @Input() boards: Board[];
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
