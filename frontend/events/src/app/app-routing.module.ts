import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventCardComponent } from './event-card/event-card.component';
import {  EventsPageComponent } from './events-page/events-page.component';

const routes: Routes = [
  {path: '', component: EventCardComponent},
  {path: 'event', component: EventCardComponent},
  {path: 'event/:key', component: EventsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
