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
            // const type = this.data.eventData[event].Classification;
            this.imageType = this.data.eventData[event].Classification;
            this.time = this.data.eventData[event].time;
            this.url = this.imageViewrService.getImage(this.data.eventData[event].Image);
        }
        else {
            this.fetchImg(this.data.baseUrl + this.data.eventData[event].Image);
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
                    // tslint:disable-next-line: component-selector
                    selector: 'carousel-image-viewer',
                    template: "<div style = \"margin-left: auto;margin-right: auto;\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n    <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n      <slide *ngFor =\"let event of data.eventData\">\r\n        <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n      </slide>\r\n    </carousel>\r\n    <div style=\"text-align: center;\">\r\n      <dl>\r\n        <dt>Time</dt>\r\n        <dd>{{time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>Classification</dt>\r\n        <dd>{{imageType}}</dd>\r\n      </dl>\r\n    </div>\r\n  </div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3AtczMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWltYWdlLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELGdDQUtDOzs7SUFKQywrQkFBZTs7SUFDZiw2QkFBZ0I7O0lBQ2hCLDJCQUFjOztJQUNkLDRCQUFlOztBQUVqQjtJQVlFLDZCQUNTLFNBQTRDLEVBQzVDLGlCQUF5QyxFQUN6Qyx1QkFBcUMsRUFDWixJQUFnQjtRQUh6QyxjQUFTLEdBQVQsU0FBUyxDQUFtQztRQUM1QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBQ3pDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBYztRQUNaLFNBQUksR0FBSixJQUFJLENBQVk7UUFSbEQsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixTQUFJLEdBQUcsRUFBRSxDQUFDO0lBTVAsQ0FBQzs7OztJQUVKLHVDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCw0Q0FBYzs7OztJQUFkLFVBQWUsS0FBSztRQUNsQixJQUFJLENBQUMsR0FBRyxHQUFHLHlCQUF5QixHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFDRCw2Q0FBZTs7OztJQUFmLFVBQWdCLEtBQUs7UUFDbkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDZCwwREFBMEQ7WUFDMUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDM0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQ2pDLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7O0lBQ0ssc0NBQVE7Ozs7SUFBZCxVQUFlLEdBQUc7Ozs7OzRCQUNOLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXZFLENBQUMsR0FBRyxTQUFtRTt3QkFDN0UsSUFBSSxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7O0tBQzNEOztnQkExQ0YsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxzekJBQXlDOztpQkFFMUM7Ozs7Z0JBakJRLFlBQVk7Z0JBRVosc0JBQXNCO2dCQUN0QixZQUFZO2dEQXlCaEIsTUFBTSxTQUFDLGVBQWU7O0lBMkIzQiwwQkFBQztDQUFBLEFBM0NELElBMkNDO1NBcENZLG1CQUFtQjs7O0lBQzlCLGtDQUFTOztJQUNULDJDQUFxQjs7SUFDckIsd0NBQWU7O0lBQ2YsbUNBQVU7O0lBRVIsd0NBQW1EOztJQUNuRCxnREFBZ0Q7O0lBQ2hELHNEQUE0Qzs7SUFDNUMsbUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcblxyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ncC1zMy1pbWFnZS12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgKiBhcyBEZWZhdWx0SW1hZ2UgZnJvbSAnLi9ncC1kZWZhdWx0LWltYWdlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgZXZlbnREYXRhOiBhbnk7XHJcbiAgYmFzZVVybDogc3RyaW5nO1xyXG4gIHdpZHRoOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Nhcm91c2VsLWltYWdlLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdjYXJvdXNlbC1pbWFnZS12aWV3ZXIuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2Nhcm91c2VsLWltYWdlLXZpZXdlci5jc3MnXSxcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtY2xhc3Mtc3VmZml4XHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbEltYWdlVmlld2VyIHtcclxuICB1cmwgPSAnJztcclxuICBub1dyYXBTbGlkZXMgPSBmYWxzZTtcclxuICBpbWFnZVR5cGUgPSAnJztcclxuICB0aW1lID0gJyc7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q2Fyb3VzZWxJbWFnZVZpZXdlcj4sXHJcbiAgICBwdWJsaWMgaW1hZ2VWaWV3clNlcnZpY2U6IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YVxyXG4gICkge31cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbiAgZXJyb3JJbmxvYWRpbmcoZXZlbnQpIHtcclxuICAgIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIERlZmF1bHRJbWFnZS5kZWZhdWx0SW1hZ2U7XHJcbiAgfVxyXG4gIGNhcm91c2VsQ2hhbmdlZChldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5iYXNlVXJsID09PSAnJykge1xyXG4gICAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgICAvLyBjb25zdCB0eXBlID0gdGhpcy5kYXRhLmV2ZW50RGF0YVtldmVudF0uQ2xhc3NpZmljYXRpb247XHJcbiAgICAgIHRoaXMuaW1hZ2VUeXBlID0gdGhpcy5kYXRhLmV2ZW50RGF0YVtldmVudF0uQ2xhc3NpZmljYXRpb247XHJcbiAgICAgIHRoaXMudGltZSA9IHRoaXMuZGF0YS5ldmVudERhdGFbZXZlbnRdLnRpbWU7XHJcblxyXG4gICAgICB0aGlzLnVybCA9IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZ2V0SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5kYXRhLmV2ZW50RGF0YVtldmVudF0uSW1hZ2VcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hJbWcodGhpcy5kYXRhLmJhc2VVcmwgKyB0aGlzLmRhdGEuZXZlbnREYXRhW2V2ZW50XS5JbWFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGZldGNoSW1nKHVybCkge1xyXG4gICAgY29uc3QgeCA9IGF3YWl0IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hJbWFnZUZyb21CYXNlVXJsKHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyB4WydlbmNvZGVkU3RyaW5nJ107XHJcbiAgfVxyXG59XHJcbiJdfQ==