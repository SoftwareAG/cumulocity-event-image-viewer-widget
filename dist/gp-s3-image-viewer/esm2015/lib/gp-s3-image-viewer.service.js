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
                    Key: key + '',
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
        return this.http.get(url);
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
                secretAccessKey: config.secretAccessKey,
                signatureVersion: config.signatureVersion,
                region: config.region,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBRS9CLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLakMsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUpwQyxlQUFVLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUNuQyxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBcUJaLGFBQVE7Ozs7UUFBRyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7O3NCQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO29CQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOztvQkFDMUIsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO2lCQUNkLENBQUM7Z0JBQ0YsT0FBTyxHQUFHLENBQUM7YUFDWjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxFQUFBO0lBM0JzQyxDQUFDOzs7OztJQUV4QyxxQkFBcUIsQ0FBQyxHQUFHO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsTUFBTTtRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTs7a0JBQ2xCLFNBQVMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUM7Z0JBQy9CLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVztnQkFDL0IsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlO2dCQUN2QyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsZ0JBQWdCO2dCQUN6QyxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07YUFDdEIsQ0FBQztZQUNGLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBdkJGLFVBQVU7Ozs7WUFIRixVQUFVOzs7O0lBS2pCLDRDQUFtQzs7SUFDbkMsd0NBQVk7O0lBQ1osb0NBQVE7O0lBQ1Isd0NBQVk7O0lBbUJaLDBDQVNDOzs7OztJQTNCVyxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgQVdTIGZyb20gJ2F3cy1zZGsnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIHtcclxuICB1cmxDaGFuZ2VkID0gbmV3IFN1YmplY3Q8U3RyaW5nPigpO1xyXG4gIGltZ1NyYyA9ICcnO1xyXG4gIHMzOiBhbnk7XHJcbiAgY29uZmlnOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBmZXRjaEltYWdlRnJvbUJhc2VVcmwodXJsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2hTMyhjb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgaWYgKGNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGF3c0NvbmZpZyA9IG5ldyBBV1MuQ29uZmlnKHtcclxuICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxyXG4gICAgICAgIHNlY3JldEFjY2Vzc0tleTogY29uZmlnLnNlY3JldEFjY2Vzc0tleSxcclxuICAgICAgICBzaWduYXR1cmVWZXJzaW9uOiBjb25maWcuc2lnbmF0dXJlVmVyc2lvbixcclxuICAgICAgICByZWdpb246IGNvbmZpZy5yZWdpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnMzID0gbmV3IEFXUy5TMyhhd3NDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRJbWFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmICh0aGlzLnMzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy5zMy5nZXRTaWduZWRVcmwoJ2dldE9iamVjdCcsIHtcclxuICAgICAgICBCdWNrZXQ6IHRoaXMuY29uZmlnLmJ1Y2tldCwgLy8gXCJzYWctZ2xvYmFsLXByZXNhbGVzXCIsXHJcbiAgICAgICAgS2V5OiBrZXkgKyAnJyxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==