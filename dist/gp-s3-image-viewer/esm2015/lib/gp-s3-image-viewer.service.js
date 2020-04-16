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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBRS9CLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUFLakMsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7UUFKbkMsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFDbEMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQXdCYixhQUFROzs7O1FBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNmLElBQUcsSUFBSSxDQUFDLEVBQUUsS0FBSyxTQUFTLEVBQ3hCOztzQkFDUSxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO29CQUM1QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOztvQkFDMUIsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFO2lCQUNkLENBQUM7Z0JBQ0YsT0FBTyxHQUFHLENBQUM7YUFDWjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ2QsQ0FBQyxFQUFBO0lBL0JzQyxDQUFDOzs7OztJQUV2QyxxQkFBcUIsQ0FBQyxHQUFHO1FBR3pCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZCxDQUFDOzs7OztJQUVELE9BQU8sQ0FBQyxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFOztrQkFDbEIsU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQztnQkFDL0IsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXOztnQkFDL0IsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlOztnQkFDdkMsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjs7Z0JBQ3pDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLGlCQUFpQjthQUN4QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7WUExQkYsVUFBVTs7OztZQUhILFVBQVU7Ozs7SUFLaEIsNENBQW1DOztJQUNsQyx3Q0FBWTs7SUFDWixvQ0FBTzs7SUFDUCx3Q0FBVzs7SUFzQlosMENBVUM7Ozs7O0lBL0JXLHNDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnQGM4eS9jbGllbnQnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkayc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdwUzNJbWFnZVZpZXdlclNlcnZpY2Uge1xyXG4gIHVybENoYW5nZWQgPSBuZXcgU3ViamVjdDxTdHJpbmc+KCk7XHJcbiAgIGltZ1NyYyA9ICcnO1xyXG4gICBzMzphbnk7XHJcbiAgIGNvbmZpZzphbnk7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOkh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgZmV0Y2hJbWFnZUZyb21CYXNlVXJsKHVybClcclxuICB7XHJcbiAgXHJcbiAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldCh1cmwpO1xyXG4gIH1cclxuICBcclxuICBmZXRjaFMzKGNvbmZpZyl7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIGlmIChjb25maWcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBjb25zdCBhd3NDb25maWcgPSBuZXcgQVdTLkNvbmZpZyh7XHJcbiAgICAgICAgYWNjZXNzS2V5SWQ6IGNvbmZpZy5hY2Nlc3NLZXlJZCwgLy8gXCJBS0lBVjZKNDJaTEVFQkxYMjNJSlwiLFxyXG4gICAgICAgIHNlY3JldEFjY2Vzc0tleTogY29uZmlnLnNlY3JldEFjY2Vzc0tleSwgLy8gXCJvYXMvajU4amZmUVJXbEh6QmVxTEpMcmZBN05UR1JucDFjOHZzQkpLXCIsXHJcbiAgICAgICAgc2lnbmF0dXJlVmVyc2lvbjogY29uZmlnLnNpZ25hdHVyZVZlcnNpb24sIC8vIFwidjRcIixcclxuICAgICAgICByZWdpb246IGNvbmZpZy5yZWdpb24gLy8gXCJldS1jZW50cmFsLTFcIlxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zMyA9IG5ldyBBV1MuUzMoYXdzQ29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcbiAgZ2V0SW1hZ2UgPSAoa2V5KSA9PiB7XHJcbiAgICAgIGlmKHRoaXMuczMgIT09IHVuZGVmaW5lZClcclxuICAgICAge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMuczMuZ2V0U2lnbmVkVXJsKCdnZXRPYmplY3QnLCB7XHJcbiAgICAgICAgICBCdWNrZXQ6IHRoaXMuY29uZmlnLmJ1Y2tldCwgLy8gXCJzYWctZ2xvYmFsLXByZXNhbGVzXCIsXHJcbiAgICAgICAgICBLZXk6IGtleSArICcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHVybDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19