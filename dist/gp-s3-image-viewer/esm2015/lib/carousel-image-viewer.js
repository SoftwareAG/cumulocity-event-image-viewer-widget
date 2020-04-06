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
        console.log('====Event Data=====');
        console.log(this.data.eventData);
        // this.carouselChanged(0);
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
        if (this.data.baseUrl === '') {
            this.url = '';
            /** @type {?} */
            let type = this.data.eventData[event].type;
            this.imageType = type.substring(type.indexOf(':'), type.indexOf(' ; '));
            this.time = this.data.eventData[event].time;
            console.log("Image Type:-" + this.imageType);
            this.url = this.imageViewrService.getImage(this.data.eventData[event].text);
        }
        else {
            this.fetchImg(this.data.baseUrl + this.data.eventData[event].text);
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchImg(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let x = yield this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
            this.url = 'data:image/png;base64, ' + x['encodedString'];
        });
    }
}
CarouselImageViewer.decorators = [
    { type: Component, args: [{
                selector: 'carousel-image-viewer',
                template: "<div style = \"margin-left: auto;margin-right: auto;\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n    <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n      <slide *ngFor =\"let event of data.eventData\">\r\n        <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" [ngStyle]=\"{'width':data.width ,'height':data.height}\">\r\n        <!-- <div class=\"carousel-caption d-none d-md-block\" style=\"background-color: rgba(0, 0, 0, 0.2)\">\r\n          <dl>\r\n            <dt>Time</dt>\r\n            <dd>{{event.time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Image Type</dt>\r\n            <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Severity</dt>\r\n            <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Device Name</dt>\r\n            <dd>{{event.source.name}}</dd>\r\n          </dl>\r\n        </div> -->\r\n      </slide>\r\n    </carousel>\r\n    <div style=\"text-align: center;\">\r\n      <dl>\r\n        <dt>Time</dt>\r\n        <dd>{{time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n      </dl>\r\n      <dl>\r\n        <dt>Image Type</dt>\r\n        <dd>{{imageType}}</dd>\r\n      </dl>\r\n    </div>\r\n   \r\n  </div>",
                styles: [".carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.left{left:0}.right{right:0}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtaW1hZ2Utdmlld2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ3AtczMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL2Nhcm91c2VsLWltYWdlLXZpZXdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRW5ELGdDQUtHOzs7SUFKQywrQkFBZTs7SUFDZiw2QkFBaUI7O0lBQ2pCLDJCQUFjOztJQUNkLDRCQUFlOztBQU9qQixNQUFNLE9BQU8sbUJBQW1COzs7Ozs7O0lBSzlCLFlBQ1MsU0FBNEMsRUFDNUMsaUJBQXlDLEVBQ3pDLHVCQUFxQyxFQUNaLElBQWdCO1FBSHpDLGNBQVMsR0FBVCxTQUFTLENBQW1DO1FBQzVDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBd0I7UUFDekMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBWTtRQVJoRCxRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFNBQUksR0FBRyxFQUFFLENBQUM7UUFPUixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLDJCQUEyQjtJQUM5QixDQUFDOzs7O0lBR0QsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxjQUFjLENBQUMsS0FBSztRQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLHlCQUF5QixHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFDSCxlQUFlLENBQUMsS0FBSztRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLEVBQUUsRUFBRTtZQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs7Z0JBQ1YsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUk7WUFDMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBRSxDQUFDO1lBQ3pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0U7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7OztJQUNLLFFBQVEsQ0FBQyxHQUFHOzs7Z0JBRVosQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRTtZQUMzRSxJQUFJLENBQUMsR0FBRyxHQUFHLHlCQUF5QixHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUU1RCxDQUFDO0tBQUE7OztZQTdDTixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsb2dEQUF5Qzs7YUFFMUM7Ozs7WUFoQk0sWUFBWTtZQUVaLHNCQUFzQjtZQUN0QixZQUFZOzRDQXVCZCxNQUFNLFNBQUMsZUFBZTs7OztJQVJ2QixrQ0FBUzs7SUFDVCwyQ0FBcUI7O0lBQ3JCLHdDQUFlOztJQUNmLG1DQUFVOztJQUVWLHdDQUFtRDs7SUFDbkQsZ0RBQWdEOztJQUNoRCxzREFBNEM7O0lBQzVDLG1DQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCAqIGFzIERlZmF1bHRJbWFnZSBmcm9tICcuL2dwLWRlZmF1bHQtaW1hZ2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICAgIGV2ZW50RGF0YTogYW55O1xyXG4gICAgYmFzZVVybDogc3RyaW5nIDtcclxuICAgIHdpZHRoOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IHN0cmluZztcclxuICB9XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdjYXJvdXNlbC1pbWFnZS12aWV3ZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiY2Fyb3VzZWwtaW1hZ2Utdmlld2VyLmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wiY2Fyb3VzZWwtaW1hZ2Utdmlld2VyLmNzc1wiXVxyXG4gIH0pXHJcbiAgZXhwb3J0IGNsYXNzIENhcm91c2VsSW1hZ2VWaWV3ZXIge1xyXG4gICAgICB1cmwgPSAnJztcclxuICAgICAgbm9XcmFwU2xpZGVzID0gZmFsc2U7XHJcbiAgICAgIGltYWdlVHlwZSA9ICcnO1xyXG4gICAgICB0aW1lID0gJyc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENhcm91c2VsSW1hZ2VWaWV3ZXI+LFxyXG4gICAgICBwdWJsaWMgaW1hZ2VWaWV3clNlcnZpY2U6IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UsXHJcbiAgICAgIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyLFxyXG4gICAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGFcclxuICAgICkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09RXZlbnQgRGF0YT09PT09Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLmV2ZW50RGF0YSk7XHJcbiAgICAgICAvLyB0aGlzLmNhcm91c2VsQ2hhbmdlZCgwKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBlcnJvcklubG9hZGluZyhldmVudCkge1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIERlZmF1bHRJbWFnZS5kZWZhdWx0SW1hZ2U7XHJcbiAgICAgIH1cclxuICAgIGNhcm91c2VsQ2hhbmdlZChldmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuYmFzZVVybCA9PT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy51cmwgPSAnJztcclxuICAgICAgICAgICAgbGV0IHR5cGUgPSB0aGlzLmRhdGEuZXZlbnREYXRhW2V2ZW50XS50eXBlO1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlVHlwZSA9IHR5cGUuc3Vic3RyaW5nKHR5cGUuaW5kZXhPZignOicpLCB0eXBlLmluZGV4T2YoJyA7ICcpICk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHRoaXMuZGF0YS5ldmVudERhdGFbZXZlbnRdLnRpbWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSW1hZ2UgVHlwZTotXCIrdGhpcy5pbWFnZVR5cGUpO1xyXG4gICAgICAgICAgICB0aGlzLnVybCA9IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZ2V0SW1hZ2UodGhpcy5kYXRhLmV2ZW50RGF0YVtldmVudF0udGV4dCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLmRhdGEuYmFzZVVybCArIHRoaXMuZGF0YS5ldmVudERhdGFbZXZlbnRdLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBhc3luYyBmZXRjaEltZyh1cmwpIHtcclxuXHJcbiAgICAgICAgbGV0IHggPSBhd2FpdCB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmZldGNoSW1hZ2VGcm9tQmFzZVVybCh1cmwpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIHhbJ2VuY29kZWRTdHJpbmcnXTtcclxuICAgIFxyXG4gICAgICB9XHJcbiAgfSJdfQ==