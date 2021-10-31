import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsMainComponent } from './news/news-main/news-main.component';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsReadComponent } from './news/news-read/news-read.component';
import { CustomDatePipe } from './custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsMainComponent,
    NewsAddComponent,
    NewsEditComponent,
    NewsReadComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
