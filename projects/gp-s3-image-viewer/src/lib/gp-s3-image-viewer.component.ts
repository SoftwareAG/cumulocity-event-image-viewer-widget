import { Component, OnInit } from '@angular/core';
import * as AWS from 'aws-sdk';


@Component({
  selector: 'lib-gp-s3-image-viewer',
  templateUrl: './gp-s3-image-viewer.html',
  styles: [`.text { transform: scaleX(-1); font-size: 10px ;}`]
})
export class GpS3ImageViewerComponent {

  constructor() { }

  getImage() {
    const awsConfig = new AWS.Config({
      accessKeyId: 'AKIAV6J42ZLEEBLX23IJ',
      secretAccessKey: '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',
      signatureVersion: 'v4',
      region: 'eu-central-1'
    });
    const s3 = new AWS.S3(awsConfig);

    const url = s3.getSignedUrl('getObject', {
      Bucket: 'sag-global-presales',
      Key: 'test-development/PROD00001-s.png'
    });
    console.log(url);
    return url;
  }

}
