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
var GpS3ImageViewerComponent = /** @class */ (function () {
    function GpS3ImageViewerComponent(dialog, events, imageViewrService, _DomSanitizationService) {
        this.dialog = dialog;
        this.events = events;
        this.imageViewrService = imageViewrService;
        this._DomSanitizationService = _DomSanitizationService;
        this.images = [1058, 1079, 984].map((/**
         * @param {?} n
         * @return {?}
         */
        function (n) { return "https://picsum.photos/id/" + n + "/900/500"; }));
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
    GpS3ImageViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.refresh();
    };
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.imageViewrService.fetchS3(this.config);
                        return [4 /*yield*/, this.fetchEvents()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.errorInloading = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
    };
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.loadImage = /**
     * @return {?}
     */
    function () {
        this.url = '';
        if (this.config.imgSrcType === 'baseUrl') {
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
        }
        else {
            this.url = this.imageViewrService.getImage(this.evantData[this.selectedIndex].text);
        }
    };
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.setSlideShow = /**
     * @return {?}
     */
    function () {
        this.slideshow = !this.slideshow;
        /** @type {?} */
        var dialogRef = this.dialog.open(CarouselImageViewer, {
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
        function (result) {
        }));
    };
    /**
     * @param {?} url
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.fetchImg = /**
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
    // filter(dateFrom, dateTo) {
    //   this.evantData.filter(singleEvent => {
    //     console.log('Event Creation Time' + singleEvent.creationTime);
    //   });
    // }
    // filter(dateFrom, dateTo) {
    //   this.evantData.filter(singleEvent => {
    //     console.log('Event Creation Time' + singleEvent.creationTime);
    //   });
    // }
    /**
     * @param {?} key
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.openDialog = 
    // filter(dateFrom, dateTo) {
    //   this.evantData.filter(singleEvent => {
    //     console.log('Event Creation Time' + singleEvent.creationTime);
    //   });
    // }
    /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var dialogRef = this.dialog.open(ImageViewerDialog, {
            width: this.config.width + 'px',
            height: this.config.height + 'px',
            data: { url: this.url }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
        }));
    };
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.fetchEvents = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
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
                function (data) {
                    if (_this.realtimeState) {
                        _this.evantData = tslib_1.__spread(data);
                        _this.evantData.reverse();
                        _this.loadImage();
                    }
                }));
                return [2 /*return*/];
            });
        });
    };
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.toggle = /**
     * @return {?}
     */
    function () {
        this.realtimeState = !this.realtimeState;
        if (this.realtimeState) {
            this.fetchEvents();
        }
    };
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
    GpS3ImageViewerComponent.prototype.stepperselectected = 
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
    function (event) {
        this.url = '';
        this.selectedIndex = event.selectedIndex;
        this.loadImage();
    };
    GpS3ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-gp-s3-image-viewer',
                    template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div style=\"height: 40px;\">\r\n    \r\n    <!-- <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\" >\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter(fromPicker, toPicker)\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button> -->\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button type=\"button\" class=\"button\" (click)=\"setSlideShow()\">\r\n        <span class=\"fa fa-slideshare\"></span>\r\n       </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n  \r\n<!-- Carousel -->\r\n<!-- (activeSlideChange)= \"carouselChanged($event)\" -->\r\n<!-- <div style = \"width:300px; height: 300px; margin-left: auto;margin-right: auto;\" *ngIf= \"slideshow == true\">\r\n  <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n    <slide *ngFor =\"let event of evantData\">\r\n      <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" style=\"width: 300px; height: 300px;\">\r\n      <div class=\"carousel-caption d-none d-md-block\" style=\"background-color: rgba(0, 0, 0, 0.2)\">\r\n        <dl>\r\n          <dt>Time</dt>\r\n          <dd>{{event.time}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Image Type</dt>\r\n          <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Severity</dt>\r\n          <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Device Name</dt>\r\n          <dd>{{event.source.name}}</dd>\r\n        </dl>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n</div> -->\r\n\r\n <div style=\"margin-left: 70px;\" >\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of evantData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0\\n yyyy HH:mm'}}</label>    {{event.type}} </ng-template>\r\n    \r\n        <div class=\"details-div\">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Image Type</dt>\r\n                <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Severity</dt>\r\n                <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" (error)=\"errorInloading($event)\" class=\"stepper-img\" (click)=\"openDialog(event.text)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px;color:#677680!important}dt{font-weight:700;line-height:1.428;display:inline}dd{line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:16px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;top:15px;font-size:10px;width:60px;white-space:initial;text-align:right}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-size:100% 100%}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.left{left:0}.right{right:0}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}"]
                }] }
    ];
    /** @nocollapse */
    GpS3ImageViewerComponent.ctorParameters = function () { return [
        { type: MatDialog },
        { type: EventService },
        { type: GpS3ImageViewerService },
        { type: DomSanitizer }
    ]; };
    GpS3ImageViewerComponent.propDecorators = {
        config: [{ type: Input }],
        stepper: [{ type: ViewChild, args: ['stepper',] }]
    };
    return GpS3ImageViewerComponent;
}());
export { GpS3ImageViewerComponent };
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
var ImageViewerDialog = /** @class */ (function () {
    function ImageViewerDialog(dialogRef, _DomSanitizationService, data) {
        this.dialogRef = dialogRef;
        this._DomSanitizationService = _DomSanitizationService;
        this.data = data;
    }
    /**
     * @return {?}
     */
    ImageViewerDialog.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    ImageViewerDialog.decorators = [
        { type: Component, args: [{
                    selector: 'image-viewer-dialog',
                    template: "\r\n    <img style=\"width: 100%; height: 100%;\" [src] = \"_DomSanitizationService.bypassSecurityTrustUrl(data.url)\"/>\r\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ImageViewerDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: DomSanitizer },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ImageViewerDialog;
}());
export { ImageViewerDialog };
if (false) {
    /** @type {?} */
    ImageViewerDialog.prototype.dialogRef;
    /** @type {?} */
    ImageViewerDialog.prototype._DomSanitizationService;
    /** @type {?} */
    ImageViewerDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFHZDtJQU9FLGtDQUFtQixNQUFpQixFQUFTLE1BQW9CLEVBQVMsaUJBQXlDLEVBQVMsdUJBQXFDO1FBQTlJLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUFTLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBYztRQUlqSyxXQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLENBQUMsSUFBSyxPQUFBLDhCQUE0QixDQUFDLGFBQVUsRUFBdkMsQ0FBdUMsRUFBQyxDQUFDO1FBRS9FLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBWHJCLENBQUM7Ozs7SUFjRCwyQ0FBUTs7O0lBQVI7UUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFaEIsQ0FBQzs7OztJQUNLLDBDQUFPOzs7SUFBYjs7Ozs7d0JBQ0UsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzVDLHFCQUFNLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBQTs7d0JBQXhCLFNBQXdCLENBQUM7Ozs7O0tBQzFCOzs7OztJQUVELGlEQUFjOzs7O0lBQWQsVUFBZSxLQUFLO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcseUJBQXlCLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNuRSxDQUFDOzs7O0lBQ0QsNENBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlFO2FBQU07WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckY7SUFDSCxDQUFDOzs7O0lBQ0QsK0NBQVk7OztJQUFaO1FBQ0EsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7O1lBQzNCLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUN0RCxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSTtZQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSTs7O1lBR2pDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3hFLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUk7Z0JBQy9DLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUk7YUFHbEQ7U0FDUixDQUFDO1FBRUYsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLE1BQU07UUFFeEMsQ0FBQyxFQUFDLENBQUM7SUFDSCxDQUFDOzs7OztJQUVLLDJDQUFROzs7O0lBQWQsVUFBZSxHQUFHOzs7Ozs0QkFFUixxQkFBTSxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dCQUF2RSxDQUFDLEdBQUcsU0FBbUU7d0JBQzNFLElBQUksQ0FBQyxHQUFHLEdBQUcseUJBQXlCLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDOzs7OztLQUUzRDtJQUdELDZCQUE2QjtJQUM3QiwyQ0FBMkM7SUFDM0MscUVBQXFFO0lBQ3JFLFFBQVE7SUFDUixJQUFJOzs7Ozs7Ozs7O0lBQ0osNkNBQVU7Ozs7Ozs7Ozs7SUFBVixVQUFXLEdBQUc7O1lBRU4sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3BELEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2pDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ3hCLENBQUM7UUFFRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsTUFBTTtRQUV4QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFSyw4Q0FBVzs7O0lBQWpCOzs7O2dCQUNFLHdCQUF3QjtnQkFDeEIsTUFBTTtnQkFDTixJQUFJLENBQUMsTUFBTTtxQkFDUixhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO29CQUN6RCxHQUFHLEVBQUUsSUFBSTtvQkFDVCxRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUFDO3FCQUNELFNBQVM7Ozs7Z0JBQUMsVUFBQSxJQUFJO29CQUNiLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTt3QkFDdEIsS0FBSSxDQUFDLFNBQVMsb0JBQU8sSUFBSSxDQUFDLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7d0JBQ3pCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztxQkFDbEI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Ozs7S0FFTjs7OztJQUNELHlDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBQ0Qsd0JBQXdCO0lBRXhCLHFDQUFxQztJQUNyQyx5Q0FBeUM7SUFDekMseUVBQXlFO0lBQ3pFLHFHQUFxRztJQUNyRyxpRUFBaUU7SUFDakUscURBQXFEO0lBQ3JELFVBQVU7SUFDVix3Q0FBd0M7SUFFeEMsaURBQWlEO0lBQ2pELDhEQUE4RDtJQUM5RCxzQkFBc0I7SUFDdEIsVUFBVTtJQUVWLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sZUFBZTtJQUNmLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDSixxREFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBbEIsVUFBbUIsS0FBSztRQUN0QixJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN6QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFbkIsQ0FBQzs7Z0JBMUlGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxvaktBQXdDO29CQUV4QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQW5CQyxTQUFTO2dCQUtGLFlBQVk7Z0JBRFosc0JBQXNCO2dCQUV0QixZQUFZOzs7eUJBb0JsQixLQUFLOzBCQVNMLFNBQVMsU0FBQyxTQUFTOztJQThIdEIsK0JBQUM7Q0FBQSxBQW5KRCxJQW1KQztTQTdJWSx3QkFBd0I7OztJQUtuQywwQ0FBK0U7O0lBQy9FLDBDQUFnQjs7SUFDaEIsNENBQWlCOztJQUNqQixrREFBdUI7O0lBQ3ZCLHVDQUFTOztJQUNULGlEQUFrQjs7SUFDbEIsaURBQXFCOztJQUNyQiw2Q0FBZTs7SUFDZiw2Q0FBa0I7O0lBQ2xCLGdEQUFxQjs7SUFDckIsMkNBQTBDOztJQWQ5QiwwQ0FBd0I7O0lBQUUsMENBQTJCOztJQUFFLHFEQUFnRDs7SUFBRSwyREFBNEM7O0FBOEluSztJQU1FLDJCQUNTLFNBQTBDLEVBQVMsdUJBQXFDLEVBQy9ELElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQWlDO1FBQVMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBQy9ELFNBQUksR0FBSixJQUFJLENBQVk7SUFDL0MsQ0FBQzs7OztJQUVKLHFDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLHdJQUF1Qzs7aUJBRXhDOzs7O2dCQXJLQyxZQUFZO2dCQUlMLFlBQVk7Z0RBcUtoQixNQUFNLFNBQUMsZUFBZTs7SUFNM0Isd0JBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxpQkFBaUI7OztJQUUxQixzQ0FBaUQ7O0lBQUUsb0RBQTRDOztJQUMvRixpQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEFXUyBmcm9tICdhd3Mtc2RrJztcclxuaW1wb3J0IHtcclxuICBNYXRTdGVwcGVyLFxyXG4gIE1hdERpYWxvZyxcclxuICBNQVRfRElBTE9HX0RBVEEsXHJcbiAgTWF0RGlhbG9nUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ncC1zMy1pbWFnZS12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJ0BjOHkvY2xpZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCAqIGFzIERlZmF1bHRJbWFnZSBmcm9tICcuL2dwLWRlZmF1bHQtaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltYWdlVmlld2VyIH0gZnJvbSAnLi9jYXJvdXNlbC1pbWFnZS12aWV3ZXInO1xyXG4vLyBpbXBvcnQgeyBTSEEyNTYsIGVuYyB9IGZyb20gXCJjcnlwdG8tanNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZ3AtczMtaW1hZ2Utdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3AtczMtaW1hZ2Utdmlld2VyLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dwLXMzLWltYWdlLXZpZXdlci5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZywgcHVibGljIGV2ZW50czogRXZlbnRTZXJ2aWNlLCBwdWJsaWMgaW1hZ2VWaWV3clNlcnZpY2U6IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UsIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyICkge1xyXG5cclxuICB9XHJcblxyXG4gIGltYWdlcyA9IFsxMDU4LCAxMDc5LCA5ODRdLm1hcCgobikgPT4gYGh0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8ke259LzkwMC81MDBgKTtcclxuICBASW5wdXQoKSBjb25maWc7XHJcbiAgaXNMaW5lYXIgPSBmYWxzZTtcclxuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG4gIHVybCA9ICcnO1xyXG4gIHNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIHJlYWx0aW1lU3RhdGUgPSB0cnVlO1xyXG4gIGV2YW50RGF0YSA9IFtdO1xyXG4gIHNsaWRlc2hvdyA9IGZhbHNlO1xyXG4gIG5vV3JhcFNsaWRlcyA9IGZhbHNlO1xyXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBwZXInKSBzdGVwcGVyOiBNYXRTdGVwcGVyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgdGhpcy5yZWZyZXNoKCk7XHJcblxyXG4gIH1cclxuICBhc3luYyByZWZyZXNoKCkge1xyXG4gICAgdGhpcy5pbWFnZVZpZXdyU2VydmljZS5mZXRjaFMzKHRoaXMuY29uZmlnKTtcclxuICAgIGF3YWl0IHRoaXMuZmV0Y2hFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGVycm9ySW5sb2FkaW5nKGV2ZW50KSB7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyBEZWZhdWx0SW1hZ2UuZGVmYXVsdEltYWdlO1xyXG4gIH1cclxuICBsb2FkSW1hZ2UoKSB7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJykge1xyXG4gICAgICB0aGlzLmZldGNoSW1nKHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cmwgPSB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmdldEltYWdlKHRoaXMuZXZhbnREYXRhW3RoaXMuc2VsZWN0ZWRJbmRleF0udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFNsaWRlU2hvdygpe1xyXG4gIHRoaXMuc2xpZGVzaG93ID0gIXRoaXMuc2xpZGVzaG93O1xyXG4gIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ2Fyb3VzZWxJbWFnZVZpZXdlciwge1xyXG4gICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoICsgJ3B4JyxcclxuICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0ICsgJ3B4JyAsXHJcbiAgICAvLyB3aWR0aDogJzUwMHB4JyxcclxuICAgIC8vIGhlaWdodDogJzUwMHB4JyxcclxuICAgIGRhdGE6IHsgZXZlbnREYXRhOiB0aGlzLmV2YW50RGF0YSxcclxuICAgICAgICAgICAgYmFzZVVybDogdGhpcy5jb25maWcuaW1nU3JjVHlwZSA9PT0gJ2Jhc2VVcmwnID8gdGhpcy5jb25maWcuYmFzZVVybCA6ICcnLFxyXG4gICAgICAgICAgICB3aWR0aDogKE51bWJlcih0aGlzLmNvbmZpZy53aWR0aCkgLSAxMDApICsgJ3B4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAoTnVtYmVyKHRoaXMuY29uZmlnLmhlaWdodCkgLSAxMDApICsgJ3B4JyAsXHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgICAgICAvLyBoZWlnaHQ6ICc1MDBweCdcclxuICAgICAgICAgIH1cclxuICB9KTtcclxuXHJcbiAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcblxyXG4gIH0pO1xyXG4gIH1cclxuICBcclxuICBhc3luYyBmZXRjaEltZyh1cmwpIHtcclxuXHJcbiAgICBsZXQgeCA9IGF3YWl0IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hJbWFnZUZyb21CYXNlVXJsKHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyB4WydlbmNvZGVkU3RyaW5nJ107XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8vIGZpbHRlcihkYXRlRnJvbSwgZGF0ZVRvKSB7XHJcbiAgLy8gICB0aGlzLmV2YW50RGF0YS5maWx0ZXIoc2luZ2xlRXZlbnQgPT4ge1xyXG4gIC8vICAgICBjb25zb2xlLmxvZygnRXZlbnQgQ3JlYXRpb24gVGltZScgKyBzaW5nbGVFdmVudC5jcmVhdGlvblRpbWUpO1xyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG4gIG9wZW5EaWFsb2coa2V5KTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXdlckRpYWxvZywge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggKyAncHgnLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCArICdweCcgLFxyXG4gICAgICBkYXRhOiB7IHVybDogdGhpcy51cmwgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaEV2ZW50cygpIHtcclxuICAgIC8vIHRoaXMuY29uZmlnLmRldmljZS5pZFxyXG4gICAgLy8xNjQ0XHJcbiAgICB0aGlzLmV2ZW50c1xyXG4gICAgICAubGlzdEJ5U291cmNlJCh0aGlzLmNvbmZpZy5kZXZpY2UuaWQgLCB7IHBhZ2VTaXplOiAyMDAwIH0sIHtcclxuICAgICAgICBob3Q6IHRydWUsXHJcbiAgICAgICAgcmVhbHRpbWU6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBpZiAodGhpcy5yZWFsdGltZVN0YXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmV2YW50RGF0YSA9IFsuLi5kYXRhXTtcclxuICAgICAgICAgIHRoaXMuZXZhbnREYXRhLnJldmVyc2UoKTtcclxuICAgICAgICAgIHRoaXMubG9hZEltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgfVxyXG4gIHRvZ2dsZSgpIHtcclxuICAgIHRoaXMucmVhbHRpbWVTdGF0ZSA9ICF0aGlzLnJlYWx0aW1lU3RhdGU7XHJcbiAgICBpZiAodGhpcy5yZWFsdGltZVN0YXRlKSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hFdmVudHMoKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gZ2V0SW1hZ2UgPSAoa2V5KSA9PiB7XHJcblxyXG4gIC8vICAgaWYgKHRoaXMuY29uZmlnICE9PSB1bmRlZmluZWQpIHtcclxuICAvLyAgICAgY29uc3QgYXdzQ29uZmlnID0gbmV3IEFXUy5Db25maWcoe1xyXG4gIC8vICAgICAgIGFjY2Vzc0tleUlkOiB0aGlzLmNvbmZpZy5hY2Nlc3NLZXlJZCwgLy8gXCJBS0lBVjZKNDJaTEVFQkxYMjNJSlwiLFxyXG4gIC8vICAgICAgIHNlY3JldEFjY2Vzc0tleTogdGhpcy5jb25maWcuc2VjcmV0QWNjZXNzS2V5LCAvLyBcIm9hcy9qNThqZmZRUldsSHpCZXFMSkxyZkE3TlRHUm5wMWM4dnNCSktcIixcclxuICAvLyAgICAgICBzaWduYXR1cmVWZXJzaW9uOiB0aGlzLmNvbmZpZy5zaWduYXR1cmVWZXJzaW9uLCAvLyBcInY0XCIsXHJcbiAgLy8gICAgICAgcmVnaW9uOiB0aGlzLmNvbmZpZy5yZWdpb24gLy8gXCJldS1jZW50cmFsLTFcIlxyXG4gIC8vICAgICB9KTtcclxuICAvLyAgICAgY29uc3QgczMgPSBuZXcgQVdTLlMzKGF3c0NvbmZpZyk7XHJcblxyXG4gIC8vICAgICBjb25zdCB1cmwgPSBzMy5nZXRTaWduZWRVcmwoJ2dldE9iamVjdCcsIHtcclxuICAvLyAgICAgICBCdWNrZXQ6IHRoaXMuY29uZmlnLmJ1Y2tldCwgLy8gXCJzYWctZ2xvYmFsLXByZXNhbGVzXCIsXHJcbiAgLy8gICAgICAgS2V5OiBrZXkgKyAnJ1xyXG4gIC8vICAgICB9KTtcclxuXHJcbiAgLy8gICAgIHJldHVybiB1cmw7XHJcbiAgLy8gICB9XHJcbiAgLy8gICByZXR1cm4gJyc7XHJcbiAgLy8gfVxyXG4gIHN0ZXBwZXJzZWxlY3RlY3RlZChldmVudCkge1xyXG4gICAgdGhpcy51cmwgPSAnJztcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGV2ZW50LnNlbGVjdGVkSW5kZXg7XHJcbiAgICB0aGlzLmxvYWRJbWFnZSgpO1xyXG5cclxuICB9XHJcbiAgLy8gY2Fyb3VzZWxDaGFuZ2VkKGV2ZW50KSB7XHJcbiAgLy8gICB0aGlzLnVybCA9ICcnO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCI9PT09PT09PT1FdmVudD09PT09PVwiKVxyXG4gIC8vICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gIC8vICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZXZlbnQgO1xyXG4gIC8vICAgdGhpcy5sb2FkSW1hZ2UoKTtcclxuXHJcbiAgLy8gfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2ltYWdlLXZpZXdlci1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiBcImltYWdlLXZpZXdlci1kaWFsb2cuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiaW1hZ2Utdmlld2VyLWRpYWxvZy5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyRGlhbG9nIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZVZpZXdlckRpYWxvZz4sIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyLFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhXHJcbiAgKSB7fVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=