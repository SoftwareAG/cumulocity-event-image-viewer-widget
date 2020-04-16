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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBQy9CO0lBTUUsZ0NBQW9CLElBQWU7UUFBbkMsaUJBQXdDO1FBQXBCLFNBQUksR0FBSixJQUFJLENBQVc7UUFKbkMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXdCYixhQUFROzs7O1FBQUcsVUFBQyxHQUFHO1lBQ1gsSUFBRyxLQUFJLENBQUMsRUFBRSxLQUFLLFNBQVMsRUFDeEI7O29CQUNRLEdBQUcsR0FBRyxLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7b0JBQzVDLE1BQU0sRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07O29CQUMxQixHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUU7aUJBQ2QsQ0FBQztnQkFDRixPQUFPLEdBQUcsQ0FBQzthQUNaO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLEVBQUE7SUEvQnNDLENBQUM7Ozs7O0lBRXZDLHNEQUFxQjs7OztJQUFyQixVQUFzQixHQUFHO1FBR3pCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELHdDQUFPOzs7O0lBQVAsVUFBUSxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFOztnQkFDbEIsU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXOztnQkFDL0IsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlOztnQkFDdkMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjs7Z0JBQ3pDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQjthQUN4QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkExQkYsVUFBVTs7OztnQkFISCxVQUFVOztJQTJDbEIsNkJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXZDWSxzQkFBc0I7OztJQUNqQyw0Q0FBbUM7O0lBQ2xDLHdDQUFZOztJQUNaLG9DQUFPOztJQUNQLHdDQUFXOztJQXNCWiwwQ0FVQzs7Ozs7SUEvQlcsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICdAYzh5L2NsaWVudCc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyU2VydmljZSB7XHJcbiAgdXJsQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PFN0cmluZz4oKTtcclxuICAgaW1nU3JjID0gJyc7XHJcbiAgIHMzOmFueTtcclxuICAgY29uZmlnOmFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCkgeyB9XHJcblxyXG4gICBmZXRjaEltYWdlRnJvbUJhc2VVcmwodXJsKVxyXG4gIHtcclxuICBcclxuICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHVybCk7XHJcbiAgfVxyXG4gIFxyXG4gIGZldGNoUzMoY29uZmlnKXtcclxuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xyXG4gICAgaWYgKGNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGNvbnN0IGF3c0NvbmZpZyA9IG5ldyBBV1MuQ29uZmlnKHtcclxuICAgICAgICBhY2Nlc3NLZXlJZDogY29uZmlnLmFjY2Vzc0tleUlkLCAvLyBcIkFLSUFWNko0MlpMRUVCTFgyM0lKXCIsXHJcbiAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBjb25maWcuc2VjcmV0QWNjZXNzS2V5LCAvLyBcIm9hcy9qNThqZmZRUldsSHpCZXFMSkxyZkE3TlRHUm5wMWM4dnNCSktcIixcclxuICAgICAgICBzaWduYXR1cmVWZXJzaW9uOiBjb25maWcuc2lnbmF0dXJlVmVyc2lvbiwgLy8gXCJ2NFwiLFxyXG4gICAgICAgIHJlZ2lvbjogY29uZmlnLnJlZ2lvbiAvLyBcImV1LWNlbnRyYWwtMVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnMzID0gbmV3IEFXUy5TMyhhd3NDb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRJbWFnZSA9IChrZXkpID0+IHtcclxuICAgICAgaWYodGhpcy5zMyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5zMy5nZXRTaWduZWRVcmwoJ2dldE9iamVjdCcsIHtcclxuICAgICAgICAgIEJ1Y2tldDogdGhpcy5jb25maWcuYnVja2V0LCAvLyBcInNhZy1nbG9iYWwtcHJlc2FsZXNcIixcclxuICAgICAgICAgIEtleToga2V5ICsgJydcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=