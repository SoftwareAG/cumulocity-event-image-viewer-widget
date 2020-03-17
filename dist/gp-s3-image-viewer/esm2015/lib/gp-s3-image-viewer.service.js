/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
export class GpS3ImageViewerService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.urlChanged = new Subject();
        this.imgSrc = '';
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchImageFronMaseUrl(url) {
        return this.http
            .get(url);
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
GpS3ImageViewerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GpS3ImageViewerService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /** @type {?} */
    GpS3ImageViewerService.prototype.urlChanged;
    /** @type {?} */
    GpS3ImageViewerService.prototype.imgSrc;
    /**
     * @type {?}
     * @private
     */
    GpS3ImageViewerService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFHakMsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFGbkMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztJQUMwQixDQUFDOzs7OztJQUV2QyxxQkFBcUIsQ0FBQyxHQUFHO1FBRXpCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDVCxzQkFBc0I7UUFDdEIsd0NBQXdDO1FBQ3hDLHFEQUFxRDtRQUNyRCw4QkFBOEI7UUFDOUIsdUNBQXVDO1FBQ3ZDLE1BQU07UUFDTiw4REFBOEQ7UUFDOUQsb0NBQW9DO1FBQ3BDLDhCQUE4QjtJQUNsQyxDQUFDOzs7WUFuQkYsVUFBVTs7OztZQUZILFVBQVU7Ozs7SUFJaEIsNENBQW1DOztJQUNsQyx3Q0FBWTs7Ozs7SUFDRCxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJ0BjOHkvY2xpZW50JztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyU2VydmljZSB7XHJcbiAgdXJsQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PFN0cmluZz4oKTtcclxuICAgaW1nU3JjID0gJyc7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgZmV0Y2hJbWFnZUZyb25NYXNlVXJsKHVybClcclxuICB7XHJcbiAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldCh1cmwpXHJcbiAgICAgIC8vIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgLy8gICB0aGlzLmltZ1NyYyA9IHJlc1snZW5jb2RlZFN0cmluZyddO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCc9PT09PT09PUltYWdlIFJlc3BvbnNlPT09PT09PT09PScpO1xyXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuaW1nU3JjKTtcclxuICAgICAgLy8gICB0aGlzLnVybENoYW5nZWQubmV4dCh0aGlzLmltZ1NyYyk7XHJcbiAgICAgIC8vIH0pO1xyXG4gICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PU91dHNpZGUgU3Vic2NyaWJlPT09PT09PT09PScpO1xyXG4gICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW1nU3JjKTtcclxuICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5pbWdTcmM7XHJcbiAgfVxyXG59XHJcbiJdfQ==