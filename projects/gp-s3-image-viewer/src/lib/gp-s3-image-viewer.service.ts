import { Injectable } from '@angular/core';
import { EventService } from '@c8y/client';
import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable()
export class GpS3ImageViewerService {
  urlChanged = new Subject<String>();
   imgSrc = '';
  constructor(private http:HttpClient) { }

   fetchImageFronMaseUrl(url)
  {
   return this.http
      .get(url)
      // .subscribe(res => {
      //   this.imgSrc = res['encodedString'];
      //   console.log('========Image Response==========');
      //   console.log(this.imgSrc);
      //   this.urlChanged.next(this.imgSrc);
      // });
      //         console.log('========Outside Subscribe==========');
      //         console.log(this.imgSrc);
      //         return this.imgSrc;
  }
}
