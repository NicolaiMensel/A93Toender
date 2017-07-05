import {Component, Input, OnInit, Output} from '@angular/core';
import {Magazine} from "./magazine";

@Component({
  selector: 'app-magazines-view',
  templateUrl: './magazines-view.component.html',
  styleUrls: ['./magazines-view.component.css']
})
export class MagazinesViewComponent implements OnInit {

  @Input()
  magazines: Magazine[];

  constructor() {
  }

  ngOnInit() {
  }

}
