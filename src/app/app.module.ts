import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Routes, RouterModule} from '@angular/router';
import {MyMaterialModule} from './MyMaterial.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeViewComponent } from './home/home-view.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    HomeViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    MyMaterialModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
