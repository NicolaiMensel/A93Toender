import {Component, Input, OnInit} from '@angular/core';
import {Arrangement} from './arrangement';

@Component({
  selector: 'app-arrangement-view',
  templateUrl: './arrangement-view.component.html',
  styleUrls: ['./arrangement-view.component.css']
})
export class ArrangementViewComponent implements OnInit {
  @Input()
  nextArr: Arrangement;
  @Input()
  upcomingArr: Arrangement[];
  @Input()
  pastArr: Arrangement[];

  title: string;
  constructor() { }

  ngOnInit() {
    this.title = "Nærmeste";
  }

  setSelectedArr(newArr : Arrangement)
  {
    this.nextArr = newArr;
    this.title = "Valgte";
  }

}
