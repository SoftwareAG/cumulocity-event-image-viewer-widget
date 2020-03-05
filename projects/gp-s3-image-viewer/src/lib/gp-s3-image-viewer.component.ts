import { Component, OnInit, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import * as AWS from 'aws-sdk';
import { MatStepper, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

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

  constructor(public dialog: MatDialog) {
    this.url = this.getImage(1);
   }
  isLinear = false;
  panelOpenState = false;
  url = '';
  selectedIndex = '0';
@ViewChild('stepper') stepper: MatStepper;
   openDialog(): void {
    const dialogRef = this.dialog.open(ImageViewerDialog, {
      width: '350px',
      height: '350px',
      data: {url: this.url}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getImage(i) {
    const awsConfig = new AWS.Config({
      accessKeyId: 'AKIAV6J42ZLEEBLX23IJ',
      secretAccessKey: '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',
      signatureVersion: 'v4',
      region: 'eu-central-1'
    });
    const s3 = new AWS.S3(awsConfig);

    const url = s3.getSignedUrl('getObject', {
      Bucket: 'sag-global-presales',
      Key: 'test-development/PROD0000' + i + '-s.png'
      // Key: 'test-development/test.png'
    });
    return url;
  }
  stepperselectected(event) {
   // console.log('Stepper Selected'+event.selectedIndex);
    this.url = this.getImage(event.selectedIndex + 1);
  }

}

@Component({
  selector: 'image-viewer-dialog',
  templateUrl: 'image-viewer-dialog.html',
  styleUrls:['image-viewer-dialog.css']
})
export class ImageViewerDialog {

  constructor(
    public dialogRef: MatDialogRef<ImageViewerDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}