import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
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
  constructor(
    public dialogRef: MatDialogRef<CarouselImageViewer>,
    public imageViewrService: GpS3ImageViewerService,
    public _DomSanitizationService: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  errorInloading(event) {
    this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
  }
  carouselChanged(event) {
    if (this.data.baseUrl === '') {
      this.url = '';
      // const type = this.data.eventData[event].Classification;
      this.imageType = this.data.eventData[event].Classification;
      this.time = this.data.eventData[event].time;

      this.url = this.imageViewrService.getImage(
        this.data.eventData[event].Image
      );
    } else {
      this.fetchImg(this.data.baseUrl + this.data.eventData[event].Image);
    }
  }
  async fetchImg(url) {
    const x = await this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
    this.url = 'data:image/png;base64, ' + x['encodedString'];
  }
}
