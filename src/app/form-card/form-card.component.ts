import { BoardService } from '../shared/board.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css']
})
export class FormCardComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Output() onTitleUpdated = new EventEmitter;
  @ViewChild('form') form: ElementRef; // only for the demonstration

  constructor(private boardService: BoardService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.boardService.updateTitle(this.id, this.title).subscribe(
      () => this._titleUpdatedSuccess(),
      (error) => this._titleUpdatedError()
    );
  }

  private _titleUpdatedSuccess(): void {
    this.onTitleUpdated.emit(this.title);
    console.log('Board updated');
  }

  private _titleUpdatedError(): void {
    console.log('Board not updated');
  }

}
