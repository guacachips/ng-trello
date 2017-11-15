import { IBoard } from './board.interface';

export class Board {
  id: string;
  title: string;
  backgroundColor: string;
  isStarred: boolean;

  constructor(board: IBoard) {
    this.id = board.id;
    this.title = board.title;
    this.backgroundColor = board.backgroundColor;
    this.isStarred = board.isStarred;
  }
}
