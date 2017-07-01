import { Component, OnInit } from '@angular/core';
import {Arrangement} from './arrangement';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-arrangement',
  templateUrl: './arrangement.component.html',
  styleUrls: ['./arrangement.component.css']
})
export class ArrangementComponent implements OnInit {
  arrangements: Arrangement[];
  nextArr: Arrangement;
  upcomingArr: Arrangement[];
  pastArr: Arrangement[];
  constructor() {
    this.arrangements = [{id:'1', title:"Sommerafslutning", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"7-29-2017"},
      {id:'1', title:"Shoppingstur", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"5-12-2017"},
      {id:'1', title:"Sankthans", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"6-20-2017"},
      {id:'1', title:"Gåtur", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"3-08-2017"},
      {id:'1', title:"Tailand", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"2-31-2017"},
      {id:'1', title:"JuleFrokerst", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"12-18-2017"},
      {id:'1', title:"GrillAften", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"8-14-2017"},
      {id:'1', title:"Opvisning", description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.", price:"100 kr.", date:"10-3-2017"}]
    this.filterArrangements();
  }

  ngOnInit() {
  }

  filterArrangements()
  {
    this.upcomingArr = [];
    this.pastArr = [];
    let currentDate = new Date();

    for(let arr of this.arrangements)
    {
      let nextdate = new Date(arr.date);
      nextdate
      console.log(nextdate);
      if(nextdate < currentDate)
      {
        this.pastArr.push(arr);
      }
      else if(this.nextArr!!)
      {
        this.upcomingArr.push(arr);
      }
      else
      {
        this.nextArr = arr;
        this.upcomingArr.push(arr);
      }
    }
  }

}
