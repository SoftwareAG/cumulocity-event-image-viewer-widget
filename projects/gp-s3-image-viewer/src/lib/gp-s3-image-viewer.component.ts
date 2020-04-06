
import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Inject,
  Input,
} from '@angular/core';
import * as AWS from 'aws-sdk';
import {
  MatStepper,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { EventService } from '@c8y/client';
import { DomSanitizer } from '@angular/platform-browser';
import * as DefaultImage from './gp-default-image';
import { CarouselImageViewer } from './carousel-image-viewer';
// import { SHA256, enc } from "crypto-js";
export interface DialogData {
  url: string;
}

@Component({
  selector: 'lib-gp-s3-image-viewer',
  templateUrl: './gp-s3-image-viewer.html',
  styleUrls: ['./gp-s3-image-viewer.css'],
  encapsulation: ViewEncapsulation.None
})
export class GpS3ImageViewerComponent {
  constructor(public dialog: MatDialog, public events: EventService, public imageViewrService: GpS3ImageViewerService, public _DomSanitizationService: DomSanitizer ) {

  }

  images = [1058, 1079, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  @Input() config;
  isLinear = false;
  panelOpenState = false;
  url = '';
  selectedIndex = 0;
  realtimeState = true;
  evantData = [];
  slideshow = false;
  noWrapSlides = false;
  @ViewChild('stepper') stepper: MatStepper;

  ngOnInit() {
   this.refresh();

  }
  async refresh() {
    this.imageViewrService.fetchS3(this.config);
    await this.fetchEvents();
  }

  errorInloading(event) {
    this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
  }
  loadImage() {
    this.url = '';
    if (this.config.imgSrcType === 'baseUrl') {
      this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
    } else {
      this.url = this.imageViewrService.getImage(this.evantData[this.selectedIndex].text);
    }
  }
  setSlideShow(){
  this.slideshow = !this.slideshow;
  const dialogRef = this.dialog.open(CarouselImageViewer, {
    width: this.config.width + 'px',
    height: this.config.height + 'px' ,
    // width: '500px',
    // height: '500px',
    data: { eventData: this.evantData,
            baseUrl: this.config.imgSrcType === 'baseUrl' ? this.config.baseUrl : '',
            width: (Number(this.config.width) - 100) + 'px',
            height: (Number(this.config.height) - 100) + 'px' ,
            // width: '500px',
            // height: '500px'
          }
  });

  dialogRef.afterClosed().subscribe(result => {

  });
  }
  
  async fetchImg(url) {

    let x = await this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
    this.url = 'data:image/png;base64, ' + x['encodedString'];

  }


  // filter(dateFrom, dateTo) {
  //   this.evantData.filter(singleEvent => {
  //     console.log('Event Creation Time' + singleEvent.creationTime);
  //   });
  // }
  openDialog(key): void {

    const dialogRef = this.dialog.open(ImageViewerDialog, {
      width: this.config.width + 'px',
      height: this.config.height + 'px' ,
      data: { url: this.url }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  async fetchEvents() {
    // this.config.device.id
    //1644
    this.events
      .listBySource$(this.config.device.id , { pageSize: 2000 }, {
        hot: true,
        realtime: true
      })
      .subscribe(data => {
        if (this.realtimeState) {
          this.evantData = [...data];
          this.evantData.reverse();
          this.loadImage();
        }
      });

  }
  toggle() {
    this.realtimeState = !this.realtimeState;
    if (this.realtimeState) {
      this.fetchEvents();
    }
  }
  // getImage = (key) => {

  //   if (this.config !== undefined) {
  //     const awsConfig = new AWS.Config({
  //       accessKeyId: this.config.accessKeyId, // "AKIAV6J42ZLEEBLX23IJ",
  //       secretAccessKey: this.config.secretAccessKey, // "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",
  //       signatureVersion: this.config.signatureVersion, // "v4",
  //       region: this.config.region // "eu-central-1"
  //     });
  //     const s3 = new AWS.S3(awsConfig);

  //     const url = s3.getSignedUrl('getObject', {
  //       Bucket: this.config.bucket, // "sag-global-presales",
  //       Key: key + ''
  //     });

  //     return url;
  //   }
  //   return '';
  // }
  stepperselectected(event) {
    this.url = '';
    this.selectedIndex = event.selectedIndex;
    this.loadImage();

  }
  // carouselChanged(event) {
  //   this.url = '';
  //   console.log("=========Event======")
  //   console.log(event);
  //   this.selectedIndex = event ;
  //   this.loadImage();

  // }
}

@Component({
  selector: 'image-viewer-dialog',
  templateUrl: "image-viewer-dialog.html",
  styleUrls: ["image-viewer-dialog.css"]
})
export class ImageViewerDialog {
  constructor(
    public dialogRef: MatDialogRef<ImageViewerDialog>, public _DomSanitizationService: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
