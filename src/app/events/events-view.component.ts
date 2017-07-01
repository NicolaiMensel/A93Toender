import {Component, Input, OnInit} from '@angular/core';
import {Event} from './event';

@Component({
  selector: 'app-events-view',
  templateUrl: './events-view.component.html',
  styleUrls: ['./events-view.component.css']
})
export class EventsViewComponent implements OnInit {
  @Input()
  nextEvent: Event;
  @Input()
  upcomingEvent: Event[];
  @Input()
  pastEvent: Event[];

  title: string;
  constructor() { }

  ngOnInit() {
    this.title = "Nærmeste";
  }

  setSelectedArr(newEvent : Event)
  {
    this.nextEvent = newEvent;
    this.title = "Valgte";
  }

}
