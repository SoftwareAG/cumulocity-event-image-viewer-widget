/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as AWS from 'aws-sdk';
export class GpS3ImageViewerService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.urlChanged = new Subject();
        this.imgSrc = '';
        this.getImage = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (this.s3 !== undefined) {
                /** @type {?} */
                const url = this.s3.getSignedUrl('getObject', {
                    Bucket: this.config.bucket,
                    // "sag-global-presales",
                    Key: key + ''
                });
                return url;
            }
            return '';
        });
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchImageFromBaseUrl(url) {
        console.log('in Fetch Url');
        return this.http
            .get(url);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    fetchS3(config) {
        this.config = config;
        if (config !== undefined) {
            /** @type {?} */
            const awsConfig = new AWS.Config({
                accessKeyId: config.accessKeyId,
                // "AKIAV6J42ZLEEBLX23IJ",
                secretAccessKey: config.secretAccessKey,
                // "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",
                signatureVersion: config.signatureVersion,
                // "v4",
                region: config.region // "eu-central-1"
            });
            this.s3 = new AWS.S3(awsConfig);
        }
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
    /** @type {?} */
    GpS3ImageViewerService.prototype.s3;
    /** @type {?} */
    GpS3ImageViewerService.prototype.config;
    /** @type {?} */
    GpS3ImageViewerService.prototype.getImage;
    /**
     * @type {?}
     * @private
     */
    GpS3ImageViewerService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBRS9CLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLakMsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFKbkMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXdCYixhQUFROzs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNmLElBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQ3hCOztzQkFDUSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO29CQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOztvQkFDMUIsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO2lCQUNkLENBQUM7Z0JBQ0YsT0FBTyxHQUFHLENBQUM7YUFDWjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxFQUFBO0lBL0JzQyxDQUFDOzs7OztJQUV2QyxxQkFBcUIsQ0FBQyxHQUFHO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7O2tCQUNsQixTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUMvQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7O2dCQUMvQixlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWU7O2dCQUN2QyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsZ0JBQWdCOztnQkFDekMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQWlCO2FBQ3hDLENBQUM7WUFDRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQTFCRixVQUFVOzs7O1lBSEgsVUFBVTs7OztJQUtoQiw0Q0FBbUM7O0lBQ2xDLHdDQUFZOztJQUNaLG9DQUFPOztJQUNQLHdDQUFXOztJQXNCWiwwQ0FVQzs7Ozs7SUEvQlcsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICdAYzh5L2NsaWVudCc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyU2VydmljZSB7XHJcbiAgdXJsQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PFN0cmluZz4oKTtcclxuICAgaW1nU3JjID0gJyc7XHJcbiAgIHMzOmFueTtcclxuICAgY29uZmlnOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCkgeyB9XHJcblxyXG4gICBmZXRjaEltYWdlRnJvbUJhc2VVcmwodXJsKVxyXG4gIHtcclxuICAgIGNvbnNvbGUubG9nKCdpbiBGZXRjaCBVcmwnKTtcclxuICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHVybCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZldGNoUzMoY29uZmlnKXtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgaWYgKGNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGF3c0NvbmZpZyA9IG5ldyBBV1MuQ29uZmlnKHtcclxuICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLCAvLyBcIkFLSUFWNko0MlpMRUVCTFgyM0lKXCIsXHJcbiAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBjb25maWcuc2VjcmV0QWNjZXNzS2V5LCAvLyBcIm9hcy9qNThqZmZRUldsSHpCZXFMSkxyZkE3TlRHUm5wMWM4dnNCSktcIixcclxuICAgICAgICBzaWduYXR1cmVWZXJzaW9uOiBjb25maWcuc2lnbmF0dXJlVmVyc2lvbiwgLy8gXCJ2NFwiLFxyXG4gICAgICAgIHJlZ2lvbjogY29uZmlnLnJlZ2lvbiAvLyBcImV1LWNlbnRyYWwtMVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnMzID0gbmV3IEFXUy5TMyhhd3NDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRJbWFnZSA9IChrZXkpID0+IHtcclxuICAgICAgaWYodGhpcy5zMyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5zMy5nZXRTaWduZWRVcmwoJ2dldE9iamVjdCcsIHtcclxuICAgICAgICAgIEJ1Y2tldDogdGhpcy5jb25maWcuYnVja2V0LCAvLyBcInNhZy1nbG9iYWwtcHJlc2FsZXNcIixcclxuICAgICAgICAgIEtleToga2V5ICsgJydcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=