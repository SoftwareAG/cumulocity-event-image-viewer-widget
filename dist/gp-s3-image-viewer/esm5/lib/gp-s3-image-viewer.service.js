/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as AWS from 'aws-sdk';
var GpS3ImageViewerService = /** @class */ (function () {
    function GpS3ImageViewerService(http) {
        var _this = this;
        this.http = http;
        this.urlChanged = new Subject();
        this.imgSrc = '';
        this.getImage = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            if (_this.s3 !== undefined) {
                /** @type {?} */
                var url = _this.s3.getSignedUrl('getObject', {
                    Bucket: _this.config.bucket,
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
    GpS3ImageViewerService.prototype.fetchImageFromBaseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @param {?} config
     * @return {?}
     */
    GpS3ImageViewerService.prototype.fetchS3 = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = config;
        if (config !== undefined) {
            /** @type {?} */
            var awsConfig = new AWS.Config({
                accessKeyId: config.accessKeyId,
                secretAccessKey: config.secretAccessKey,
                signatureVersion: config.signatureVersion,
                region: config.region,
            });
            this.s3 = new AWS.S3(awsConfig);
        }
    };
    GpS3ImageViewerService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GpS3ImageViewerService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return GpS3ImageViewerService;
}());
export { GpS3ImageViewerService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBQy9CO0lBTUUsZ0NBQW9CLElBQWdCO1FBQXBDLGlCQUF3QztRQUFwQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSnBDLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ25DLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFxQlosYUFBUTs7OztRQUFHLFVBQUMsR0FBRztZQUNiLElBQUksS0FBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQUU7O29CQUNuQixHQUFHLEdBQUcsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO29CQUM1QyxNQUFNLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOztvQkFDMUIsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO2lCQUNkLENBQUM7Z0JBQ0YsT0FBTyxHQUFHLENBQUM7YUFDWjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxFQUFBO0lBM0JzQyxDQUFDOzs7OztJQUV4QyxzREFBcUI7Ozs7SUFBckIsVUFBc0IsR0FBRztRQUN2QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsd0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7O2dCQUNsQixTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUMvQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7Z0JBQy9CLGVBQWUsRUFBRSxNQUFNLENBQUMsZUFBZTtnQkFDdkMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtnQkFDekMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2FBQ3RCLENBQUM7WUFDRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQXZCRixVQUFVOzs7O2dCQUhGLFVBQVU7O0lBcUNuQiw2QkFBQztDQUFBLEFBbENELElBa0NDO1NBakNZLHNCQUFzQjs7O0lBQ2pDLDRDQUFtQzs7SUFDbkMsd0NBQVk7O0lBQ1osb0NBQVE7O0lBQ1Isd0NBQVk7O0lBbUJaLDBDQVNDOzs7OztJQTNCVyxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgQVdTIGZyb20gJ2F3cy1zZGsnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIHtcclxuICB1cmxDaGFuZ2VkID0gbmV3IFN1YmplY3Q8U3RyaW5nPigpO1xyXG4gIGltZ1NyYyA9ICcnO1xyXG4gIHMzOiBhbnk7XHJcbiAgY29uZmlnOiBhbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBmZXRjaEltYWdlRnJvbUJhc2VVcmwodXJsKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwpO1xyXG4gIH1cclxuXHJcbiAgZmV0Y2hTMyhjb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgaWYgKGNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGF3c0NvbmZpZyA9IG5ldyBBV1MuQ29uZmlnKHtcclxuICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLFxyXG4gICAgICAgIHNlY3JldEFjY2Vzc0tleTogY29uZmlnLnNlY3JldEFjY2Vzc0tleSxcclxuICAgICAgICBzaWduYXR1cmVWZXJzaW9uOiBjb25maWcuc2lnbmF0dXJlVmVyc2lvbixcclxuICAgICAgICByZWdpb246IGNvbmZpZy5yZWdpb24sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnMzID0gbmV3IEFXUy5TMyhhd3NDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRJbWFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmICh0aGlzLnMzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgdXJsID0gdGhpcy5zMy5nZXRTaWduZWRVcmwoJ2dldE9iamVjdCcsIHtcclxuICAgICAgICBCdWNrZXQ6IHRoaXMuY29uZmlnLmJ1Y2tldCwgLy8gXCJzYWctZ2xvYmFsLXByZXNhbGVzXCIsXHJcbiAgICAgICAgS2V5OiBrZXkgKyAnJyxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==