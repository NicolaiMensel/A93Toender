import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createEvent(event)
  {
    /*this.topicService.create(topic).subscribe(topic => this.router.navigate(["topics"]).then(() => this.loginValidationBar.open("Topic has been created!", "Ok", {
      duration: 3000,
    })));*/
  }

}
