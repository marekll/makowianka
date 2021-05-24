import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticleBoxComponent } from './article-box/article-box.component';
import { TeamComponent } from './team/team.component';
import { PictureBoxComponent } from './picture-box/picture-box.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { SeasonTableComponent } from './season-table/season-table.component';
import { PictureWinComponent } from './picture-win/picture-win.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleBoxComponent,
    TeamComponent,
    PictureBoxComponent,
    MainPageComponent,
    SeasonTableComponent,
    PictureWinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
