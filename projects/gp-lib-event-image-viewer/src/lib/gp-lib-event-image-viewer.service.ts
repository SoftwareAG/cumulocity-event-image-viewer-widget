import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as AWS from 'aws-sdk';

@Injectable()
export class GpLibEventImageViewerService {
  urlChanged = new Subject<string>();
  imgSrc = '';
  s3: any;
  config: any;
  constructor(private http: HttpClient) { }

  fetchImageFromBaseUrl(url) {
    return this.http.get(url);
  }
  fetchS3(config) {
    this.config = config;
    if (config !== undefined) {
      const awsConfig = new AWS.Config({
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        signatureVersion: config.signatureVersion,
        region: config.region,
      });
      this.s3 = new AWS.S3(awsConfig);
    }
  }
  getImage = (key) => {
    if (this.s3 !== undefined) {
      const url = this.s3.getSignedUrl('getObject', {
        Bucket: this.config.bucket, // "sag-global-presales",
        Key: key + '',
      });
      return url;
    }
    return '';
  }
}
