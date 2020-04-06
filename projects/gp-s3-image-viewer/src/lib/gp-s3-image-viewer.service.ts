import { Injectable } from '@angular/core';
import { EventService } from '@c8y/client';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
import * as AWS from 'aws-sdk';
@Injectable()
export class GpS3ImageViewerService {
  urlChanged = new Subject<String>();
   imgSrc = '';
   s3:any;
   config:any;
  constructor(private http:HttpClient) { }

   fetchImageFromBaseUrl(url)
  {
    console.log('in Fetch Url');
   return this.http
      .get(url);
  }
  
  fetchS3(config){
    this.config = config;
    if (config !== undefined) {
      const awsConfig = new AWS.Config({
        accessKeyId: config.accessKeyId, // "AKIAV6J42ZLEEBLX23IJ",
        secretAccessKey: config.secretAccessKey, // "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",
        signatureVersion: config.signatureVersion, // "v4",
        region: config.region // "eu-central-1"
      });
      this.s3 = new AWS.S3(awsConfig);
    }
  }
  getImage = (key) => {
      if(this.s3 !== undefined)
      {
        const url = this.s3.getSignedUrl('getObject', {
          Bucket: this.config.bucket, // "sag-global-presales",
          Key: key + ''
        });
        return url;
      }
      return '';
  }


}
