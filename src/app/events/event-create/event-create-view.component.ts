import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CropperSettings, ImageCropperComponent} from "ng2-img-cropper";
import {Event} from '../event';

@Component({
  selector: 'app-event-create-view',
  templateUrl: './event-create-view.component.html',
  styleUrls: ['./event-create-view.component.css']
})
export class EventCreateViewComponent implements OnInit {

  data: any;
  cropperSettings: CropperSettings;

  @ViewChild('cropper', undefined)
  cropper:ImageCropperComponent;

  newEvent: Event;
  changingImage : boolean;

  @Output()
  tryCreateEmitter = new EventEmitter();

  constructor() {
    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 625;
    this.cropperSettings.height = 339;
    this.cropperSettings.croppedWidth = 625;
    this.cropperSettings.croppedHeight = 339;
    this.cropperSettings.canvasWidth = 625;
    this.cropperSettings.canvasHeight = 339;
    this.cropperSettings.noFileInput = true;

    this.data = {};
  }

  ngOnInit() {
    this.newEvent = new Event;
  }

  changeImage()
  {
    this.changingImage = true;
  }

  saveNewImage(){
    this.changingImage = false;
    this.newEvent.imageUrl = this.data.image
  }

  fileChangeListener($event) {
    var image:any = new Image();
    var file:File = $event.target.files[0];
    var myReader:FileReader = new FileReader();
    var that = this;
    myReader.onloadend = function (loadEvent:any) {
      image.src = loadEvent.target.result;
      that.cropper.setImage(image);
    };
    this.changeImage();
    myReader.readAsDataURL(file);
  }

  tryCreateEvent()
  {
    this.tryCreateEmitter.emit(this.newEvent);
    this.newEvent = new Event;
  }

  doStuff()
  {
  }

}
