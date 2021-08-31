import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Event } from '../modules/event';
import { EVENTS } from '../modules/mockEvents';

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
