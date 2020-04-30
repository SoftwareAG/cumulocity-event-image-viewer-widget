/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel-image-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { DomSanitizer } from '@angular/platform-browser';
import * as DefaultImage from './gp-default-image';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.eventData;
    /** @type {?} */
    DialogData.prototype.baseUrl;
    /** @type {?} */
    DialogData.prototype.width;
    /** @type {?} */
    DialogData.prototype.height;
}
// tslint:disable-next-line: component-class-suffix
export class CarouselImageViewer {
    /**
     * @param {?} dialogRef
     * @param {?} imageViewrService
     * @param {?} _DomSanitizationService
     * @param {?} data
     */
    constructor(dialogRef, imageViewrService, _DomSanitizationService, data) {
        this.dialogRef = dialogRef;
        this.imageViewrService = imageViewrService;
        this._DomSanitizationService = _DomSanitizationService;
        this.data = data;
        this.url = '';
        this.noWrapSlides = false;
        this.imageType = '';
        this.time = '';
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    errorInloading(event) {
        this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    carouselChanged(event) {
        if (this.data.eventData.length > 0 && this.data.eventData[event].Image !== undefined) {
            if (this.data.baseUrl === '') {
                this.url = '';
                // const type = this.data.eventData[event].Classification;
                this.imageType = this.data.eventData[event].Classification;
                this.time = this.data.eventData[event].time;
                this.url = this.imageViewrService.getImage(this.data.eventData[event].Image);
            }
            else {
                this.fetchImg(this.data.baseUrl + this.data.eventData[event].Image);
            }
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchImg(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const x = yield this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
            this.url = 'data:image/png;base64, ' + x['encodedString'];
        });
    }
}
CarouselImageViewer.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line: component-selector
                selector: 'carousel-image-viewer',
                template: "<div style = \"margin-left: auto;margin-right: auto;\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n    <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n      <slide *ngFor =\"let event of data.eventData\">\r\n        <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n      </slide>\r\n    </carousel>\r\n    <div style=\"text-align: center;\">\r\n      <dl>\r\n        <dt>Time</dt>\r\n        <dd>{{time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>Classification</dt>\r\n        <dd>{{imageType}}</dd>\r\n      </dl>\r\n    </div>\r\n  </div>",
                styles: [".carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}"]
            }] }
];
/** @nocollapse */
CarouselImageViewer.ctorParameters = () => [
    { type: MatDialogRef },
    { type: GpS3ImageViewerService },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    CarouselImageViewer.prototype.url;
    /** @type {?} */
    CarouselImageViewer.prototype.noWrapSlides;
    /** @type {?} */
    CarouselImageViewer.prototype.imageType;
    /** @type {?} */
    CarouselImageViewer.prototype.time;
    /** @type {?} */
    CarouselImageViewer.prototype.dialogRef;
    /** @type {?} */
    CarouselImageViewer.prototype.imageViewrService;
    /** @type {?} */
    CarouselImageViewer.prototype._DomSanitizationService;
    /** @type {?} */
    CarouselImageViewer.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3AtczMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWltYWdlLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELGdDQUtDOzs7SUFKQywrQkFBZTs7SUFDZiw2QkFBZ0I7O0lBQ2hCLDJCQUFjOztJQUNkLDRCQUFlOztBQVFqQixtREFBbUQ7QUFDbkQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQUs5QixZQUNTLFNBQTRDLEVBQzVDLGlCQUF5QyxFQUN6Qyx1QkFBcUMsRUFDWixJQUFnQjtRQUh6QyxjQUFTLEdBQVQsU0FBUyxDQUFtQztRQUM1QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBQ3pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBYztRQUNaLFNBQUksR0FBSixJQUFJLENBQVk7UUFSbEQsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBTVAsQ0FBQzs7OztJQUVKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsY0FBYyxDQUFDLEtBQUs7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLEtBQUs7UUFDbkIsSUFBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNkLDBEQUEwRDtnQkFDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUM7Z0JBQzNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUU1QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FDakMsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckU7U0FDRjtJQUNELENBQUM7Ozs7O0lBQ0ssUUFBUSxDQUFDLEdBQUc7OztrQkFDVixDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFO1lBQzdFLElBQUksQ0FBQyxHQUFHLEdBQUcseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVELENBQUM7S0FBQTs7O1lBNUNGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsc3pCQUF5Qzs7YUFFMUM7Ozs7WUFqQlEsWUFBWTtZQUVaLHNCQUFzQjtZQUN0QixZQUFZOzRDQXlCaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFSekIsa0NBQVM7O0lBQ1QsMkNBQXFCOztJQUNyQix3Q0FBZTs7SUFDZixtQ0FBVTs7SUFFUix3Q0FBbUQ7O0lBQ25ELGdEQUFnRDs7SUFDaEQsc0RBQTRDOztJQUM1QyxtQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCAqIGFzIERlZmF1bHRJbWFnZSBmcm9tICcuL2dwLWRlZmF1bHQtaW1hZ2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICBldmVudERhdGE6IGFueTtcclxuICBiYXNlVXJsOiBzdHJpbmc7XHJcbiAgd2lkdGg6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY2Fyb3VzZWwtaW1hZ2Utdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJ2Nhcm91c2VsLWltYWdlLXZpZXdlci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnY2Fyb3VzZWwtaW1hZ2Utdmlld2VyLmNzcyddLFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsSW1hZ2VWaWV3ZXIge1xyXG4gIHVybCA9ICcnO1xyXG4gIG5vV3JhcFNsaWRlcyA9IGZhbHNlO1xyXG4gIGltYWdlVHlwZSA9ICcnO1xyXG4gIHRpbWUgPSAnJztcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDYXJvdXNlbEltYWdlVmlld2VyPixcclxuICAgIHB1YmxpYyBpbWFnZVZpZXdyU2VydmljZTogR3BTM0ltYWdlVmlld2VyU2VydmljZSxcclxuICAgIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyLFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhXHJcbiAgKSB7fVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxuICBlcnJvcklubG9hZGluZyhldmVudCkge1xyXG4gICAgdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgRGVmYXVsdEltYWdlLmRlZmF1bHRJbWFnZTtcclxuICB9XHJcbiAgY2Fyb3VzZWxDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICBpZiAoIHRoaXMuZGF0YS5ldmVudERhdGEubGVuZ3RoID4gMCAmJiB0aGlzLmRhdGEuZXZlbnREYXRhW2V2ZW50XS5JbWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodGhpcy5kYXRhLmJhc2VVcmwgPT09ICcnKSB7XHJcbiAgICAgIHRoaXMudXJsID0gJyc7XHJcbiAgICAgIC8vIGNvbnN0IHR5cGUgPSB0aGlzLmRhdGEuZXZlbnREYXRhW2V2ZW50XS5DbGFzc2lmaWNhdGlvbjtcclxuICAgICAgdGhpcy5pbWFnZVR5cGUgPSB0aGlzLmRhdGEuZXZlbnREYXRhW2V2ZW50XS5DbGFzc2lmaWNhdGlvbjtcclxuICAgICAgdGhpcy50aW1lID0gdGhpcy5kYXRhLmV2ZW50RGF0YVtldmVudF0udGltZTtcclxuXHJcbiAgICAgIHRoaXMudXJsID0gdGhpcy5pbWFnZVZpZXdyU2VydmljZS5nZXRJbWFnZShcclxuICAgICAgICB0aGlzLmRhdGEuZXZlbnREYXRhW2V2ZW50XS5JbWFnZVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLmRhdGEuYmFzZVVybCArIHRoaXMuZGF0YS5ldmVudERhdGFbZXZlbnRdLkltYWdlKTtcclxuICAgIH1cclxuICB9XHJcbiAgfVxyXG4gIGFzeW5jIGZldGNoSW1nKHVybCkge1xyXG4gICAgY29uc3QgeCA9IGF3YWl0IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hJbWFnZUZyb21CYXNlVXJsKHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyB4WydlbmNvZGVkU3RyaW5nJ107XHJcbiAgfVxyXG59XHJcbiJdfQ==