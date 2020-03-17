
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
// import { SHA256, enc } from "crypto-js";
export interface DialogData {
  url: string;
}
@Component({
  selector: "lib-gp-s3-image-viewer",
  templateUrl: "./gp-s3-image-viewer.html",
  styleUrls: ["./gp-s3-image-viewer.css"],
  encapsulation: ViewEncapsulation.None
})
export class GpS3ImageViewerComponent {
  constructor(public dialog: MatDialog, public events: EventService, public imageViewrService: GpS3ImageViewerService, public _DomSanitizationService: DomSanitizer ) {

   // this.url = this.getImage(1);

    // console.log("Device Id"+ this.config.device.id)
  }

  @Input() config;
  isLinear = false;
  panelOpenState = false;
  url = '';
  selectedIndex = 0;
  realtimeState = true;
  evantData = [];

  @ViewChild('stepper') stepper: MatStepper;

  ngOnInit() {
    this.fetchEvents();
    if (this.config.imgSrcType === 'baseUrl') {
      console.log("Base URL"+ this.config.baseUrl);
      this.fetchImg(this.config.baseUrl + this.evantData[0].text);
    } else {
      this.url = this.getImage(this.evantData[0].text);
    }

  }
  refresh(){

    this.fetchEvents();
    this.url = '';
    if (this.config.imgSrcType === 'baseUrl') {
      console.log("Base URL"+ this.config.baseUrl);
      this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
    } else {
      this.url = this.getImage(this.evantData[this.selectedIndex].text);
    }
  }
  async fetchImg(url){

    console.log("===+ URL=====");
    console.log(url);
    let x = await this.imageViewrService.fetchImageFronMaseUrl(url).toPromise(); 
    console.log(x)
    this.url = 'data:image/png;base64, ' + x['encodedString'];
  }

  

  filter(dateFrom, dateTo) {
    // console.log(this.evantData);
    // console.log(dateFrom);
    // console.log(dateTo);

    this.evantData.filter(singleEvent => {
      console.log('Event Creation Time' + singleEvent.creationTime);
    });
  }
  openDialog(key): void {

    //const url = this.getImage(key);
    const dialogRef = this.dialog.open(ImageViewerDialog, {
      width: this.config.width + 'px',
      height: this.config.height + 'px' ,
      data: { url: this.url }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  async fetchEvents() {
    console.log('==========Config========');
    console.log(this.config);
    // this.config.device.id
    this.events
      .listBySource$(this.config.device.id ,{ pageSize: 2000 }, {
        hot: true,
        realtime: true
      })
      .subscribe(data => {
        if (this.realtimeState) {
          console.log('============Data===============');
          console.log(data);
          this.evantData = [...data];
          this.evantData.reverse();
        }
      });

  }
  toggle() {
    this.realtimeState = !this.realtimeState;
    if (this.realtimeState) {
      this.fetchEvents();
    }
  }
  getImage = (key) => {
  console.log('====get Image====');
  console.log(key);
    if (this.config !== undefined) {

      // const hash = SHA256('oas/j58jffQRWlHzBeqLJLrfA7NTGRnp1c8vsBJK').toString(enc.Base64);
      // console.log("============Hash Code=====");
      // console.log(hash);

      const awsConfig = new AWS.Config({
        accessKeyId: this.config.accessKeyId, // "AKIAV6J42ZLEEBLX23IJ",
        secretAccessKey: this.config.secretAccessKey, // "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",
        signatureVersion: this.config.signatureVersion, // "v4",
        region: this.config.region // "eu-central-1"
      });
      const s3 = new AWS.S3(awsConfig);

      const url = s3.getSignedUrl('getObject', {
        Bucket: this.config.bucket, // "sag-global-presales",
        Key: key + ''
      });
      
      return url;
    }
    return '';
  }
  stepperselectected(event) {
    this.url = '';
    this.selectedIndex = event.selectedIndex;
    if (this.config.imgSrcType === 'baseUrl') {
      console.log("Base URL"+ this.config.baseUrl);
      this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
    } else {
      this.url = this.getImage(this.evantData[this.selectedIndex].text);
    }

  }
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
