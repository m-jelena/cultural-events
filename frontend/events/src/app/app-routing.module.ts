import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsMainComponent } from './news/news-main/news-main.component';
import { NewsReadComponent } from './news/news-read/news-read.component';

const routes: Routes = [
  {path: 'news', component: NewsMainComponent},
  {path: 'news-add', component: NewsAddComponent},
  {path: 'news-edit/:id', component: NewsEditComponent},
  {path: 'news-read/:id', component:NewsReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
