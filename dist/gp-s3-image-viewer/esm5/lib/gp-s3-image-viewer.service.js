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
    GpS3ImageViewerService.prototype.fetchImageFromBaseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        console.log('in Fetch Url');
        return this.http
            .get(url);
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
                // "AKIAV6J42ZLEEBLX23IJ",
                secretAccessKey: config.secretAccessKey,
                // "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",
                signatureVersion: config.signatureVersion,
                // "v4",
                region: config.region // "eu-central-1"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBQy9CO0lBTUUsZ0NBQW9CLElBQWU7UUFBbkMsaUJBQXdDO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQVc7UUFKbkMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXdCYixhQUFROzs7O1FBQUcsVUFBQyxHQUFHO1lBQ1gsSUFBRyxLQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFDeEI7O29CQUNRLEdBQUcsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7b0JBQzVDLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07O29CQUMxQixHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUU7aUJBQ2QsQ0FBQztnQkFDRixPQUFPLEdBQUcsQ0FBQzthQUNaO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLEVBQUE7SUEvQnNDLENBQUM7Ozs7O0lBRXZDLHNEQUFxQjs7OztJQUFyQixVQUFzQixHQUFHO1FBRXhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRUQsd0NBQU87Ozs7SUFBUCxVQUFRLE1BQU07UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7O2dCQUNsQixTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDO2dCQUMvQixXQUFXLEVBQUUsTUFBTSxDQUFDLFdBQVc7O2dCQUMvQixlQUFlLEVBQUUsTUFBTSxDQUFDLGVBQWU7O2dCQUN2QyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsZ0JBQWdCOztnQkFDekMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsaUJBQWlCO2FBQ3hDLENBQUM7WUFDRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7O2dCQTFCRixVQUFVOzs7O2dCQUhILFVBQVU7O0lBMkNsQiw2QkFBQztDQUFBLEFBeENELElBd0NDO1NBdkNZLHNCQUFzQjs7O0lBQ2pDLDRDQUFtQzs7SUFDbEMsd0NBQVk7O0lBQ1osb0NBQU87O0lBQ1Asd0NBQVc7O0lBc0JaLDBDQVVDOzs7OztJQS9CVyxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJ0BjOHkvY2xpZW50JztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0ICogYXMgQVdTIGZyb20gJ2F3cy1zZGsnO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIHtcclxuICB1cmxDaGFuZ2VkID0gbmV3IFN1YmplY3Q8U3RyaW5nPigpO1xyXG4gICBpbWdTcmMgPSAnJztcclxuICAgczM6YW55O1xyXG4gICBjb25maWc6YW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgIGZldGNoSW1hZ2VGcm9tQmFzZVVybCh1cmwpXHJcbiAge1xyXG4gICAgY29uc29sZS5sb2coJ2luIEZldGNoIFVybCcpO1xyXG4gICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodXJsKTtcclxuICB9XHJcbiAgXHJcbiAgZmV0Y2hTMyhjb25maWcpe1xyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICBpZiAoY29uZmlnICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgY29uc3QgYXdzQ29uZmlnID0gbmV3IEFXUy5Db25maWcoe1xyXG4gICAgICAgIGFjY2Vzc0tleUlkOiBjb25maWcuYWNjZXNzS2V5SWQsIC8vIFwiQUtJQVY2SjQyWkxFRUJMWDIzSUpcIixcclxuICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IGNvbmZpZy5zZWNyZXRBY2Nlc3NLZXksIC8vIFwib2FzL2o1OGpmZlFSV2xIekJlcUxKTHJmQTdOVEdSbnAxYzh2c0JKS1wiLFxyXG4gICAgICAgIHNpZ25hdHVyZVZlcnNpb246IGNvbmZpZy5zaWduYXR1cmVWZXJzaW9uLCAvLyBcInY0XCIsXHJcbiAgICAgICAgcmVnaW9uOiBjb25maWcucmVnaW9uIC8vIFwiZXUtY2VudHJhbC0xXCJcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuczMgPSBuZXcgQVdTLlMzKGF3c0NvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEltYWdlID0gKGtleSkgPT4ge1xyXG4gICAgICBpZih0aGlzLnMzICE9PSB1bmRlZmluZWQpXHJcbiAgICAgIHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnMzLmdldFNpZ25lZFVybCgnZ2V0T2JqZWN0Jywge1xyXG4gICAgICAgICAgQnVja2V0OiB0aGlzLmNvbmZpZy5idWNrZXQsIC8vIFwic2FnLWdsb2JhbC1wcmVzYWxlc1wiLFxyXG4gICAgICAgICAgS2V5OiBrZXkgKyAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==