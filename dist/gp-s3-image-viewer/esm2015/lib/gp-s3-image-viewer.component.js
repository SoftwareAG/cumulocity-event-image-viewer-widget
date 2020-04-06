/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewEncapsulation, Inject, Input, } from '@angular/core';
import { MatStepper, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { EventService } from '@c8y/client';
import { DomSanitizer } from '@angular/platform-browser';
import * as DefaultImage from './gp-default-image';
import { CarouselImageViewer } from './carousel-image-viewer';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.url;
}
export class GpS3ImageViewerComponent {
    /**
     * @param {?} dialog
     * @param {?} events
     * @param {?} imageViewrService
     * @param {?} _DomSanitizationService
     */
    constructor(dialog, events, imageViewrService, _DomSanitizationService) {
        this.dialog = dialog;
        this.events = events;
        this.imageViewrService = imageViewrService;
        this._DomSanitizationService = _DomSanitizationService;
        this.images = [1058, 1079, 984].map((/**
         * @param {?} n
         * @return {?}
         */
        (n) => `https://picsum.photos/id/${n}/900/500`));
        this.isLinear = false;
        this.panelOpenState = false;
        this.url = '';
        this.selectedIndex = 0;
        this.realtimeState = true;
        this.evantData = [];
        this.slideshow = false;
        this.noWrapSlides = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.refresh();
    }
    /**
     * @return {?}
     */
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.imageViewrService.fetchS3(this.config);
            yield this.fetchEvents();
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    errorInloading(event) {
        this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
    }
    /**
     * @return {?}
     */
    loadImage() {
        this.url = '';
        if (this.config.imgSrcType === 'baseUrl') {
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
        }
        else {
            this.url = this.imageViewrService.getImage(this.evantData[this.selectedIndex].text);
        }
    }
    /**
     * @return {?}
     */
    setSlideShow() {
        this.slideshow = !this.slideshow;
        /** @type {?} */
        const dialogRef = this.dialog.open(CarouselImageViewer, {
            width: this.config.width + 'px',
            height: this.config.height + 'px',
            // width: '500px',
            // height: '500px',
            data: { eventData: this.evantData,
                baseUrl: this.config.imgSrcType === 'baseUrl' ? this.config.baseUrl : '',
                width: (Number(this.config.width) - 100) + 'px',
                height: (Number(this.config.height) - 100) + 'px',
            }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
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
    // filter(dateFrom, dateTo) {
    //   this.evantData.filter(singleEvent => {
    //     console.log('Event Creation Time' + singleEvent.creationTime);
    //   });
    // }
    /**
     * @param {?} key
     * @return {?}
     */
    openDialog(key) {
        /** @type {?} */
        const dialogRef = this.dialog.open(ImageViewerDialog, {
            width: this.config.width + 'px',
            height: this.config.height + 'px',
            data: { url: this.url }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    /**
     * @return {?}
     */
    fetchEvents() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // this.config.device.id
            //1644
            this.events
                .listBySource$(this.config.device.id, { pageSize: 2000 }, {
                hot: true,
                realtime: true
            })
                .subscribe((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                if (this.realtimeState) {
                    this.evantData = [...data];
                    this.evantData.reverse();
                    this.loadImage();
                }
            }));
        });
    }
    /**
     * @return {?}
     */
    toggle() {
        this.realtimeState = !this.realtimeState;
        if (this.realtimeState) {
            this.fetchEvents();
        }
    }
    // getImage = (key) => {
    //   if (this.config !== undefined) {
    //     const awsConfig = new AWS.Config({
    //       accessKeyId: this.config.accessKeyId, // "AKIAV6J42ZLEEBLX23IJ",
    //       secretAccessKey: this.config.secretAccessKey, // "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",
    //       signatureVersion: this.config.signatureVersion, // "v4",
    //       region: this.config.region // "eu-central-1"
    //     });
    //     const s3 = new AWS.S3(awsConfig);
    //     const url = s3.getSignedUrl('getObject', {
    //       Bucket: this.config.bucket, // "sag-global-presales",
    //       Key: key + ''
    //     });
    //     return url;
    //   }
    //   return '';
    // }
    /**
     * @param {?} event
     * @return {?}
     */
    stepperselectected(event) {
        this.url = '';
        this.selectedIndex = event.selectedIndex;
        this.loadImage();
    }
}
GpS3ImageViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gp-s3-image-viewer',
                template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div style=\"height: 40px;\">\r\n    \r\n    <!-- <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\" >\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter(fromPicker, toPicker)\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button> -->\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button type=\"button\" class=\"button\" (click)=\"setSlideShow()\">\r\n        <span class=\"fa fa-slideshare\"></span>\r\n       </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n  \r\n<!-- Carousel -->\r\n<!-- (activeSlideChange)= \"carouselChanged($event)\" -->\r\n<!-- <div style = \"width:300px; height: 300px; margin-left: auto;margin-right: auto;\" *ngIf= \"slideshow == true\">\r\n  <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n    <slide *ngFor =\"let event of evantData\">\r\n      <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" style=\"width: 300px; height: 300px;\">\r\n      <div class=\"carousel-caption d-none d-md-block\" style=\"background-color: rgba(0, 0, 0, 0.2)\">\r\n        <dl>\r\n          <dt>Time</dt>\r\n          <dd>{{event.time}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Image Type</dt>\r\n          <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Severity</dt>\r\n          <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Device Name</dt>\r\n          <dd>{{event.source.name}}</dd>\r\n        </dl>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n</div> -->\r\n\r\n <div style=\"margin-left: 70px;\" >\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of evantData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0\\n yyyy HH:mm'}}</label>    {{event.type}} </ng-template>\r\n    \r\n        <div class=\"details-div\">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Image Type</dt>\r\n                <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Severity</dt>\r\n                <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" (error)=\"errorInloading($event)\" class=\"stepper-img\" (click)=\"openDialog(event.text)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px;color:#677680!important}dt{font-weight:700;line-height:1.428;display:inline}dd{line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:16px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;top:15px;font-size:10px;width:60px;white-space:initial;text-align:right}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-size:100% 100%}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.left{left:0}.right{right:0}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}"]
            }] }
];
/** @nocollapse */
GpS3ImageViewerComponent.ctorParameters = () => [
    { type: MatDialog },
    { type: EventService },
    { type: GpS3ImageViewerService },
    { type: DomSanitizer }
];
GpS3ImageViewerComponent.propDecorators = {
    config: [{ type: Input }],
    stepper: [{ type: ViewChild, args: ['stepper',] }]
};
if (false) {
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.images;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.config;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.isLinear;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.panelOpenState;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.url;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.selectedIndex;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.realtimeState;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.evantData;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.slideshow;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.noWrapSlides;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.stepper;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.dialog;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.events;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.imageViewrService;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype._DomSanitizationService;
}
export class ImageViewerDialog {
    /**
     * @param {?} dialogRef
     * @param {?} _DomSanitizationService
     * @param {?} data
     */
    constructor(dialogRef, _DomSanitizationService, data) {
        this.dialogRef = dialogRef;
        this._DomSanitizationService = _DomSanitizationService;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
ImageViewerDialog.decorators = [
    { type: Component, args: [{
                selector: 'image-viewer-dialog',
                template: "\r\n    <img style=\"width: 100%; height: 100%;\" [src] = \"_DomSanitizationService.bypassSecurityTrustUrl(data.url)\"/>\r\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ImageViewerDialog.ctorParameters = () => [
    { type: MatDialogRef },
    { type: DomSanitizer },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ImageViewerDialog.prototype.dialogRef;
    /** @type {?} */
    ImageViewerDialog.prototype._DomSanitizationService;
    /** @type {?} */
    ImageViewerDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFTZCxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7O0lBQ25DLFlBQW1CLE1BQWlCLEVBQVMsTUFBb0IsRUFBUyxpQkFBeUMsRUFBUyx1QkFBcUM7UUFBOUksV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBQVMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBSWpLLFdBQU0sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLEVBQUMsQ0FBQztRQUUvRSxhQUFRLEdBQUcs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RyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVuQixDQUFDOzs7WUExSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLG9qS0FBd0M7Z0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQW5CQyxTQUFTO1lBS0YsWUFBWTtZQURaLHNCQUFzQjtZQUV0QixZQUFZOzs7cUJBb0JsQixLQUFLO3NCQVNMLFNBQVMsU0FBQyxTQUFTOzs7O0lBVnBCLDBDQUErRTs7SUFDL0UsMENBQWdCOztJQUNoQiw0Q0FBaUI7O0lBQ2pCLGtEQUF1Qjs7SUFDdkIsdUNBQVM7O0lBQ1QsaURBQWtCOztJQUNsQixpREFBcUI7O0lBQ3JCLDZDQUFlOztJQUNmLDZDQUFrQjs7SUFDbEIsZ0RBQXFCOztJQUNyQiwyQ0FBMEM7O0lBZDlCLDBDQUF3Qjs7SUFBRSwwQ0FBMkI7O0lBQUUscURBQWdEOztJQUFFLDJEQUE0Qzs7QUFtSm5LLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixZQUNTLFNBQTBDLEVBQVMsdUJBQXFDLEVBQy9ELElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQWlDO1FBQVMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBQy9ELFNBQUksR0FBSixJQUFJLENBQVk7SUFDL0MsQ0FBQzs7OztJQUVKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix3SUFBdUM7O2FBRXhDOzs7O1lBcktDLFlBQVk7WUFJTCxZQUFZOzRDQXFLaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsc0NBQWlEOztJQUFFLG9EQUE0Qzs7SUFDL0YsaUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkayc7XHJcbmltcG9ydCB7XHJcbiAgTWF0U3RlcHBlcixcclxuICBNYXREaWFsb2csXHJcbiAgTUFUX0RJQUxPR19EQVRBLFxyXG4gIE1hdERpYWxvZ1JlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyU2VydmljZSB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICdAYzh5L2NsaWVudCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgKiBhcyBEZWZhdWx0SW1hZ2UgZnJvbSAnLi9ncC1kZWZhdWx0LWltYWdlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJbWFnZVZpZXdlciB9IGZyb20gJy4vY2Fyb3VzZWwtaW1hZ2Utdmlld2VyJztcclxuLy8gaW1wb3J0IHsgU0hBMjU2LCBlbmMgfSBmcm9tIFwiY3J5cHRvLWpzXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWdwLXMzLWltYWdlLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dwLXMzLWltYWdlLXZpZXdlci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ncC1zMy1pbWFnZS12aWV3ZXIuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csIHB1YmxpYyBldmVudHM6IEV2ZW50U2VydmljZSwgcHVibGljIGltYWdlVmlld3JTZXJ2aWNlOiBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlLCBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplciApIHtcclxuXHJcbiAgfVxyXG5cclxuICBpbWFnZXMgPSBbMTA1OCwgMTA3OSwgOTg0XS5tYXAoKG4pID0+IGBodHRwczovL3BpY3N1bS5waG90b3MvaWQvJHtufS85MDAvNTAwYCk7XHJcbiAgQElucHV0KCkgY29uZmlnO1xyXG4gIGlzTGluZWFyID0gZmFsc2U7XHJcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuICB1cmwgPSAnJztcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICByZWFsdGltZVN0YXRlID0gdHJ1ZTtcclxuICBldmFudERhdGEgPSBbXTtcclxuICBzbGlkZXNob3cgPSBmYWxzZTtcclxuICBub1dyYXBTbGlkZXMgPSBmYWxzZTtcclxuICBAVmlld0NoaWxkKCdzdGVwcGVyJykgc3RlcHBlcjogTWF0U3RlcHBlcjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgIHRoaXMucmVmcmVzaCgpO1xyXG5cclxuICB9XHJcbiAgYXN5bmMgcmVmcmVzaCgpIHtcclxuICAgIHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hTMyh0aGlzLmNvbmZpZyk7XHJcbiAgICBhd2FpdCB0aGlzLmZldGNoRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBlcnJvcklubG9hZGluZyhldmVudCkge1xyXG4gICAgdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgRGVmYXVsdEltYWdlLmRlZmF1bHRJbWFnZTtcclxuICB9XHJcbiAgbG9hZEltYWdlKCkge1xyXG4gICAgdGhpcy51cmwgPSAnJztcclxuICAgIGlmICh0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID09PSAnYmFzZVVybCcpIHtcclxuICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLmNvbmZpZy5iYXNlVXJsICsgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS50ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXJsID0gdGhpcy5pbWFnZVZpZXdyU2VydmljZS5nZXRJbWFnZSh0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRTbGlkZVNob3coKXtcclxuICB0aGlzLnNsaWRlc2hvdyA9ICF0aGlzLnNsaWRlc2hvdztcclxuICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENhcm91c2VsSW1hZ2VWaWV3ZXIsIHtcclxuICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCArICdweCcsXHJcbiAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCArICdweCcgLFxyXG4gICAgLy8gd2lkdGg6ICc1MDBweCcsXHJcbiAgICAvLyBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICBkYXRhOiB7IGV2ZW50RGF0YTogdGhpcy5ldmFudERhdGEsXHJcbiAgICAgICAgICAgIGJhc2VVcmw6IHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJyA/IHRoaXMuY29uZmlnLmJhc2VVcmwgOiAnJyxcclxuICAgICAgICAgICAgd2lkdGg6IChOdW1iZXIodGhpcy5jb25maWcud2lkdGgpIC0gMTAwKSArICdweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogKE51bWJlcih0aGlzLmNvbmZpZy5oZWlnaHQpIC0gMTAwKSArICdweCcgLFxyXG4gICAgICAgICAgICAvLyB3aWR0aDogJzUwMHB4JyxcclxuICAgICAgICAgICAgLy8gaGVpZ2h0OiAnNTAwcHgnXHJcbiAgICAgICAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG5cclxuICB9KTtcclxuICB9XHJcbiAgXHJcbiAgYXN5bmMgZmV0Y2hJbWcodXJsKSB7XHJcblxyXG4gICAgbGV0IHggPSBhd2FpdCB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmZldGNoSW1hZ2VGcm9tQmFzZVVybCh1cmwpLnRvUHJvbWlzZSgpO1xyXG4gICAgdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgeFsnZW5jb2RlZFN0cmluZyddO1xyXG5cclxuICB9XHJcblxyXG5cclxuICAvLyBmaWx0ZXIoZGF0ZUZyb20sIGRhdGVUbykge1xyXG4gIC8vICAgdGhpcy5ldmFudERhdGEuZmlsdGVyKHNpbmdsZUV2ZW50ID0+IHtcclxuICAvLyAgICAgY29uc29sZS5sb2coJ0V2ZW50IENyZWF0aW9uIFRpbWUnICsgc2luZ2xlRXZlbnQuY3JlYXRpb25UaW1lKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuICBvcGVuRGlhbG9nKGtleSk6IHZvaWQge1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oSW1hZ2VWaWV3ZXJEaWFsb2csIHtcclxuICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgKyAncHgnICxcclxuICAgICAgZGF0YTogeyB1cmw6IHRoaXMudXJsIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG5cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hFdmVudHMoKSB7XHJcbiAgICAvLyB0aGlzLmNvbmZpZy5kZXZpY2UuaWRcclxuICAgIC8vMTY0NFxyXG4gICAgdGhpcy5ldmVudHNcclxuICAgICAgLmxpc3RCeVNvdXJjZSQodGhpcy5jb25maWcuZGV2aWNlLmlkICwgeyBwYWdlU2l6ZTogMjAwMCB9LCB7XHJcbiAgICAgICAgaG90OiB0cnVlLFxyXG4gICAgICAgIHJlYWx0aW1lOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhbHRpbWVTdGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5ldmFudERhdGEgPSBbLi4uZGF0YV07XHJcbiAgICAgICAgICB0aGlzLmV2YW50RGF0YS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICB0aGlzLmxvYWRJbWFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnJlYWx0aW1lU3RhdGUgPSAhdGhpcy5yZWFsdGltZVN0YXRlO1xyXG4gICAgaWYgKHRoaXMucmVhbHRpbWVTdGF0ZSkge1xyXG4gICAgICB0aGlzLmZldGNoRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIGdldEltYWdlID0gKGtleSkgPT4ge1xyXG5cclxuICAvLyAgIGlmICh0aGlzLmNvbmZpZyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgLy8gICAgIGNvbnN0IGF3c0NvbmZpZyA9IG5ldyBBV1MuQ29uZmlnKHtcclxuICAvLyAgICAgICBhY2Nlc3NLZXlJZDogdGhpcy5jb25maWcuYWNjZXNzS2V5SWQsIC8vIFwiQUtJQVY2SjQyWkxFRUJMWDIzSUpcIixcclxuICAvLyAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHRoaXMuY29uZmlnLnNlY3JldEFjY2Vzc0tleSwgLy8gXCJvYXMvajU4amZmUVJXbEh6QmVxTEpMcmZBN05UR1JucDFjOHZzQkpLXCIsXHJcbiAgLy8gICAgICAgc2lnbmF0dXJlVmVyc2lvbjogdGhpcy5jb25maWcuc2lnbmF0dXJlVmVyc2lvbiwgLy8gXCJ2NFwiLFxyXG4gIC8vICAgICAgIHJlZ2lvbjogdGhpcy5jb25maWcucmVnaW9uIC8vIFwiZXUtY2VudHJhbC0xXCJcclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICAgIGNvbnN0IHMzID0gbmV3IEFXUy5TMyhhd3NDb25maWcpO1xyXG5cclxuICAvLyAgICAgY29uc3QgdXJsID0gczMuZ2V0U2lnbmVkVXJsKCdnZXRPYmplY3QnLCB7XHJcbiAgLy8gICAgICAgQnVja2V0OiB0aGlzLmNvbmZpZy5idWNrZXQsIC8vIFwic2FnLWdsb2JhbC1wcmVzYWxlc1wiLFxyXG4gIC8vICAgICAgIEtleToga2V5ICsgJydcclxuICAvLyAgICAgfSk7XHJcblxyXG4gIC8vICAgICByZXR1cm4gdXJsO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgcmV0dXJuICcnO1xyXG4gIC8vIH1cclxuICBzdGVwcGVyc2VsZWN0ZWN0ZWQoZXZlbnQpIHtcclxuICAgIHRoaXMudXJsID0gJyc7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBldmVudC5zZWxlY3RlZEluZGV4O1xyXG4gICAgdGhpcy5sb2FkSW1hZ2UoKTtcclxuXHJcbiAgfVxyXG4gIC8vIGNhcm91c2VsQ2hhbmdlZChldmVudCkge1xyXG4gIC8vICAgdGhpcy51cmwgPSAnJztcclxuICAvLyAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09RXZlbnQ9PT09PT1cIilcclxuICAvLyAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAvLyAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGV2ZW50IDtcclxuICAvLyAgIHRoaXMubG9hZEltYWdlKCk7XHJcblxyXG4gIC8vIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpbWFnZS12aWV3ZXItZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogXCJpbWFnZS12aWV3ZXItZGlhbG9nLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImltYWdlLXZpZXdlci1kaWFsb2cuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckRpYWxvZyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VWaWV3ZXJEaWFsb2c+LCBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YVxyXG4gICkge31cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19