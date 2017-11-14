import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCategoryComponent } from './board-category.component';

describe('BoardCategoryComponent', () => {
  let component: BoardCategoryComponent;
  let fixture: ComponentFixture<BoardCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
