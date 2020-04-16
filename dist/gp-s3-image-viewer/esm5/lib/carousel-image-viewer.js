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
var CarouselImageViewer = /** @class */ (function () {
    function CarouselImageViewer(dialogRef, imageViewrService, _DomSanitizationService, data) {
        this.dialogRef = dialogRef;
        this.imageViewrService = imageViewrService;
        this._DomSanitizationService = _DomSanitizationService;
        this.data = data;
        this.url = '';
        this.noWrapSlides = false;
        this.imageType = '';
        this.time = '';
        // this.carouselChanged(0);
    }
    /**
     * @return {?}
     */
    CarouselImageViewer.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselImageViewer.prototype.errorInloading = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselImageViewer.prototype.carouselChanged = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.data.baseUrl === '') {
            this.url = '';
            /** @type {?} */
            var type = this.data.eventData[event].type;
            this.imageType = type.substring(type.indexOf(':'), type.indexOf(' ; '));
            this.time = this.data.eventData[event].time;
            this.url = this.imageViewrService.getImage(this.data.eventData[event].text);
        }
        else {
            this.fetchImg(this.data.baseUrl + this.data.eventData[event].text);
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    CarouselImageViewer.prototype.fetchImg = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var x;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageViewrService.fetchImageFromBaseUrl(url).toPromise()];
                    case 1:
                        x = _a.sent();
                        this.url = 'data:image/png;base64, ' + x['encodedString'];
                        return [2 /*return*/];
                }
            });
        });
    };
    CarouselImageViewer.decorators = [
        { type: Component, args: [{
                    selector: 'carousel-image-viewer',
                    template: "<div style = \"margin-left: auto;margin-right: auto;\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n    <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n      <slide *ngFor =\"let event of data.eventData\">\r\n        <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n        <!-- <div class=\"carousel-caption d-none d-md-block\" style=\"background-color: rgba(0, 0, 0, 0.2)\">\r\n          <dl>\r\n            <dt>Time</dt>\r\n            <dd>{{event.time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Image Type</dt>\r\n            <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Severity</dt>\r\n            <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Device Name</dt>\r\n            <dd>{{event.source.name}}</dd>\r\n          </dl>\r\n        </div> -->\r\n      </slide>\r\n    </carousel>\r\n    <div style=\"text-align: center;\">\r\n      <dl>\r\n        <dt>Time</dt>\r\n        <dd>{{time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>Image Type</dt>\r\n        <dd>{{imageType}}</dd>\r\n      </dl>\r\n    </div>\r\n   \r\n  </div>",
                    styles: [".carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.left{left:0}.right{right:0}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    CarouselImageViewer.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: GpS3ImageViewerService },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return CarouselImageViewer;
}());
export { CarouselImageViewer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3AtczMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWltYWdlLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELGdDQUtHOzs7SUFKQywrQkFBZTs7SUFDZiw2QkFBaUI7O0lBQ2pCLDJCQUFjOztJQUNkLDRCQUFlOztBQUVuQjtJQVVJLDZCQUNTLFNBQTRDLEVBQzVDLGlCQUF5QyxFQUN6Qyx1QkFBcUMsRUFDWixJQUFnQjtRQUh6QyxjQUFTLEdBQVQsU0FBUyxDQUFtQztRQUM1QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBQ3pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBYztRQUNaLFNBQUksR0FBSixJQUFJLENBQVk7UUFSaEQsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBUVQsMkJBQTJCO0lBQzlCLENBQUM7Ozs7SUFHRCx1Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBQ0QsNENBQWM7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDaEIsSUFBSSxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBQ0gsNkNBQWU7Ozs7SUFBZixVQUFnQixLQUFLO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDOztnQkFDVixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSTtZQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7WUFDekUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9FO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RFO0lBQ0gsQ0FBQzs7Ozs7SUFDSyxzQ0FBUTs7OztJQUFkLFVBQWUsR0FBRzs7Ozs7NEJBRVIscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFBOzt3QkFBdkUsQ0FBQyxHQUFHLFNBQW1FO3dCQUMzRSxJQUFJLENBQUMsR0FBRyxHQUFHLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7S0FFM0Q7O2dCQTVDTixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsb2dEQUF5Qzs7aUJBRTFDOzs7O2dCQWhCTSxZQUFZO2dCQUVaLHNCQUFzQjtnQkFDdEIsWUFBWTtnREF1QmQsTUFBTSxTQUFDLGVBQWU7O0lBK0IzQiwwQkFBQztDQUFBLEFBN0NILElBNkNHO1NBeENZLG1CQUFtQjs7O0lBQzVCLGtDQUFTOztJQUNULDJDQUFxQjs7SUFDckIsd0NBQWU7O0lBQ2YsbUNBQVU7O0lBRVYsd0NBQW1EOztJQUNuRCxnREFBZ0Q7O0lBQ2hELHNEQUE0Qzs7SUFDNUMsbUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyU2VydmljZSB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0ICogYXMgRGVmYXVsdEltYWdlIGZyb20gJy4vZ3AtZGVmYXVsdC1pbWFnZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gICAgZXZlbnREYXRhOiBhbnk7XHJcbiAgICBiYXNlVXJsOiBzdHJpbmcgO1xyXG4gICAgd2lkdGg6IHN0cmluZztcclxuICAgIGhlaWdodDogc3RyaW5nO1xyXG4gIH1cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2Nhcm91c2VsLWltYWdlLXZpZXdlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJjYXJvdXNlbC1pbWFnZS12aWV3ZXIuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJjYXJvdXNlbC1pbWFnZS12aWV3ZXIuY3NzXCJdXHJcbiAgfSlcclxuICBleHBvcnQgY2xhc3MgQ2Fyb3VzZWxJbWFnZVZpZXdlciB7XHJcbiAgICAgIHVybCA9ICcnO1xyXG4gICAgICBub1dyYXBTbGlkZXMgPSBmYWxzZTtcclxuICAgICAgaW1hZ2VUeXBlID0gJyc7XHJcbiAgICAgIHRpbWUgPSAnJztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2Fyb3VzZWxJbWFnZVZpZXdlcj4sXHJcbiAgICAgIHB1YmxpYyBpbWFnZVZpZXdyU2VydmljZTogR3BTM0ltYWdlVmlld2VyU2VydmljZSxcclxuICAgICAgcHVibGljIF9Eb21TYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsXHJcbiAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YVxyXG4gICAgKSB7XHJcbiAgICAgICBcclxuICAgICAgIC8vIHRoaXMuY2Fyb3VzZWxDaGFuZ2VkKDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICAgIH1cclxuICAgIGVycm9ySW5sb2FkaW5nKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgRGVmYXVsdEltYWdlLmRlZmF1bHRJbWFnZTtcclxuICAgICAgfVxyXG4gICAgY2Fyb3VzZWxDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5iYXNlVXJsID09PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9IHRoaXMuZGF0YS5ldmVudERhdGFbZXZlbnRdLnR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VUeXBlID0gdHlwZS5zdWJzdHJpbmcodHlwZS5pbmRleE9mKCc6JyksIHR5cGUuaW5kZXhPZignIDsgJykgKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gdGhpcy5kYXRhLmV2ZW50RGF0YVtldmVudF0udGltZTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZ2V0SW1hZ2UodGhpcy5kYXRhLmV2ZW50RGF0YVtldmVudF0udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLmRhdGEuYmFzZVVybCArIHRoaXMuZGF0YS5ldmVudERhdGFbZXZlbnRdLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhc3luYyBmZXRjaEltZyh1cmwpIHtcclxuXHJcbiAgICAgICAgbGV0IHggPSBhd2FpdCB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmZldGNoSW1hZ2VGcm9tQmFzZVVybCh1cmwpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIHhbJ2VuY29kZWRTdHJpbmcnXTtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgfSJdfQ==