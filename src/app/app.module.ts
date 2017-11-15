import { BoardService } from './shared/board.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardSummaryComponent } from './board-summary/board-summary.component';
import { BoardCategoryComponent } from './board-category/board-category.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { BoardDetailComponent } from './board-detail/board-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardSummaryComponent,
    BoardCategoryComponent,
    BoardDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
