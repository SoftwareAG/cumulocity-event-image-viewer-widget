import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as DefaultImage from './gp-default-image';

export interface DialogData {
    eventData: any;
    baseUrl: string ;
    width: string;
    height: string;
  }
@Component({
    selector: 'carousel-image-viewer',
    templateUrl: "carousel-image-viewer.html",
    styleUrls: ["carousel-image-viewer.css"]
  })
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
    ) {
        console.log('====Event Data=====');
        console.log(this.data.eventData);
       // this.carouselChanged(0);
    }
    
    
    onNoClick(): void {
      this.dialogRef.close();
    }
    errorInloading(event) {
        this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
      }
    carouselChanged(event) {
        if (this.data.baseUrl === '') {
            this.url = '';
            let type = this.data.eventData[event].type;
            this.imageType = type.substring(type.indexOf(':'), type.indexOf(' ; ') );
            this.time = this.data.eventData[event].time;
            console.log("Image Type:-"+this.imageType);
            this.url = this.imageViewrService.getImage(this.data.eventData[event].text);
        } else {
            this.fetchImg(this.data.baseUrl + this.data.eventData[event].text);
        }
      }
      async fetchImg(url) {

        let x = await this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
        this.url = 'data:image/png;base64, ' + x['encodedString'];
    
      }
  }