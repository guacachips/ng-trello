import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardSummaryComponent } from './board-summary/board-summary.component';
import { BoardCategoryComponent } from './board-category/board-category.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardSummaryComponent,
    BoardCategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
