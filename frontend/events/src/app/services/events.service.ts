import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Event } from '../models/event';
import { EVENTS } from '../models/mockEvents';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }
  id:string = '';
  getEvents(): Observable<Event[]> {
    const events: Event[] = EVENTS;
    return of(events);
  }

  goToEvent(id:string){
    return this.id = id;
  }
}
