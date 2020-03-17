/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
var GpS3ImageViewerService = /** @class */ (function () {
    function GpS3ImageViewerService(http) {
        this.http = http;
        this.urlChanged = new Subject();
        this.imgSrc = '';
    }
    /**
     * @param {?} url
     * @return {?}
     */
    GpS3ImageViewerService.prototype.fetchImageFronMaseUrl = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
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
    /**
     * @type {?}
     * @private
     */
    GpS3ImageViewerService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CO0lBSUUsZ0NBQW9CLElBQWU7UUFBZixTQUFJLEdBQUosSUFBSSxDQUFXO1FBRm5DLGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBQ2xDLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFDMEIsQ0FBQzs7Ozs7SUFFdkMsc0RBQXFCOzs7O0lBQXJCLFVBQXNCLEdBQUc7UUFFekIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNaLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNULHNCQUFzQjtRQUN0Qix3Q0FBd0M7UUFDeEMscURBQXFEO1FBQ3JELDhCQUE4QjtRQUM5Qix1Q0FBdUM7UUFDdkMsTUFBTTtRQUNOLDhEQUE4RDtRQUM5RCxvQ0FBb0M7UUFDcEMsOEJBQThCO0lBQ2xDLENBQUM7O2dCQW5CRixVQUFVOzs7O2dCQUZILFVBQVU7O0lBc0JsQiw2QkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLHNCQUFzQjs7O0lBQ2pDLDRDQUFtQzs7SUFDbEMsd0NBQVk7Ozs7O0lBQ0Qsc0NBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICdAYzh5L2NsaWVudCc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdwUzNJbWFnZVZpZXdlclNlcnZpY2Uge1xyXG4gIHVybENoYW5nZWQgPSBuZXcgU3ViamVjdDxTdHJpbmc+KCk7XHJcbiAgIGltZ1NyYyA9ICcnO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgIGZldGNoSW1hZ2VGcm9uTWFzZVVybCh1cmwpXHJcbiAge1xyXG4gICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgIC5nZXQodXJsKVxyXG4gICAgICAvLyAuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIC8vICAgdGhpcy5pbWdTcmMgPSByZXNbJ2VuY29kZWRTdHJpbmcnXTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZygnPT09PT09PT1JbWFnZSBSZXNwb25zZT09PT09PT09PT0nKTtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmltZ1NyYyk7XHJcbiAgICAgIC8vICAgdGhpcy51cmxDaGFuZ2VkLm5leHQodGhpcy5pbWdTcmMpO1xyXG4gICAgICAvLyB9KTtcclxuICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT1PdXRzaWRlIFN1YnNjcmliZT09PT09PT09PT0nKTtcclxuICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmltZ1NyYyk7XHJcbiAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuaW1nU3JjO1xyXG4gIH1cclxufVxyXG4iXX0=