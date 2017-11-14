export class Board {
  title: string;
  backgroundColor: string;
  isStarred: boolean;

  constructor(title: string) {
    this.title = title;
    this.backgroundColor = '#127abd';
    this.isStarred = false;
  }
}
