import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import {NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageCropperComponent} from "ng2-img-cropper";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeViewComponent } from './home/home-view.component';
import { EventsComponent } from './events/events.component';
import { EventsViewComponent } from './events/events-view.component';
import { EventCreateComponent } from './events/event-create/event-create.component';
import { EventCreateViewComponent } from './events/event-create/event-create-view.component';
import {FormsModule} from "@angular/forms";
import {MyNgbDateParserFormatter} from "./my-ngb-date-parser-formatter";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events', component: EventsComponent},
  { path: 'event-create', component: EventCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    HomeViewComponent,
    EventsComponent,
    EventsViewComponent,
    EventCreateComponent,
    EventCreateViewComponent,
    ImageCropperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    {provide: NgbDateParserFormatter, useFactory: () => new MyNgbDateParserFormatter('longDate')}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
