import {Component, OnInit, Output} from '@angular/core';
import {Magazine} from "./magazine";

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css']
})
export class MagazinesComponent implements OnInit {

  magazines: Magazine[];

  constructor() {
    this.magazines = [
      {id:'1', link:'123123', date:'01-01-2017'},
      {id:'1', link:'123123', date:'04-01-2017'},
      {id:'1', link:'123123', date:'07-01-2017'},
      {id:'1', link:'123123', date:'10-01-2017'}
    ]
  }

  ngOnInit() {
  }

}
