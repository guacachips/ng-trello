import { FormsModule } from '@angular/forms';
import { BoardService } from './shared/board.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardSummaryComponent } from './board-summary/board-summary.component';
import { BoardCategoryComponent } from './board-category/board-category.component';

import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { BoardDetailComponent } from './board-detail/board-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { FormCardComponent } from './form-card/form-card.component';

import { NgMaterialModule } from './shared/ngMaterial/ngMaterial.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BoardSummaryComponent,
    BoardCategoryComponent,
    BoardDetailComponent,
    FormCardComponent
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
