import { Component, OnInit } from '@angular/core';

import { Event } from '../models/event';
import { EVENTS } from '../models/mockEvents';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {
  
  constructor(private eventService: EventsService) { }
  id:string='';
  events: Event[] = [];
  
  ngOnInit(): void {
    this.events = EVENTS;
    this.id = this.eventService.id;
  }

}
