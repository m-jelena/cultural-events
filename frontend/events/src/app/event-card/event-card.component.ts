import { Component, OnInit } from '@angular/core';
import { Event } from '../modules/event';
import { EVENTS } from '../modules/mockEvents';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  events: Event[] = [];
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = EVENTS;
    console.log(this.events)
  }

  goToEvent(event:string){
    // console.log(event);
    this.eventsService.goToEvent(event);
  }
}
