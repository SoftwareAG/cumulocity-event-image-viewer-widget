import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GpLibEventImageViewerService } from './gp-lib-event-image-viewer.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as DefaultImage from './gp-default-image';

export interface DialogData {
  eventData: any;
  baseUrl: string;
  width: string;
  height: string;
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'carousel-image-viewer',
  templateUrl: 'carousel-image-viewer.html',
  styleUrls: ['carousel-image-viewer.css'],
})
// tslint:disable-next-line: component-class-suffix
export class CarouselImageViewer {
  url = '';
  noWrapSlides = false;
  imageType = '';
  time = '';
  imageMap = {};
  constructor(
    public dialogRef: MatDialogRef<CarouselImageViewer>,
    public imageViewrService: GpLibEventImageViewerService,
    public _DomSanitizationService: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  errorInloading(event) {
    this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
  }
  async carouselChanged(event) {
    if ( this.data.eventData.length > 0 && this.data.eventData[event].Image !== undefined) {
      if (this.imageMap.hasOwnProperty(this.data.eventData[event].id)) {
        this.url = this.imageMap[this.data.eventData[event].id];
      } else {
        if (this.data.baseUrl === '') {
          this.url = '';
          // const type = this.data.eventData[event].Classification;
          this.imageType = this.data.eventData[event].Classification;
          this.time = this.data.eventData[event].time;
          this.url = this.imageViewrService.getImage(
            this.data.eventData[event].Image
          );
        } else {
          this.url = await this.fetchImg(this.data.baseUrl + this.data.eventData[event].Image);
        }
        this.imageMap[this.data.eventData[event].id] = this.url;
      }
    }
  }
  async fetchImg(url) {
    const x = await this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
    this.url = 'data:image/png;base64, ' + x['encodedString'];
    return this.url;
  }
}
