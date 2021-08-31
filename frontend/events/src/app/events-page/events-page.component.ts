import { Component, OnInit } from '@angular/core';

import { Event } from '../modules/event';
import { EVENTS } from '../modules/mockEvents';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  
  constructor(private eventService: EventsService) { }
  id:string='1';
  events: Event[] = [];
  
  ngOnInit(): void {
    this.events = EVENTS;
    // this.id = this.eventService.id;
  }

}
