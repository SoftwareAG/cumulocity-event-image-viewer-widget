/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewEncapsulation, Inject, Input, } from '@angular/core';
import { MatStepper, MatDialog, MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material';
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
        this.isLinear = false;
        this.panelOpenState = false;
        this.url = '';
        this.selectedIndex = 0;
        this.realtimeState = true;
        this.evantData = [];
        this.displayData = [];
        this.slideshow = false;
        this.noWrapSlides = false;
        this.firstCall = false;
        this.fromDate = '';
        this.toDate = '';
    }
    // tslint:disable-next-line: use-life-cycle-interface
    // tslint:disable-next-line: use-life-cycle-interface
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.ngOnInit = 
    // tslint:disable-next-line: use-life-cycle-interface
    /**
     * @return {?}
     */
    function () {
        this.firstCall = true;
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
                        this.fromDate = '';
                        this.toDate = '';
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
        // this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
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
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].Image);
        }
        else {
            this.url = this.imageViewrService.getImage(this.evantData[this.selectedIndex].Image);
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
            data: {
                eventData: this.evantData,
                baseUrl: this.config.imgSrcType === 'baseUrl' ? this.config.baseUrl : '',
                width: Number(this.config.width) - 100 + 'px',
                height: Number(this.config.height) - 100 + 'px',
            },
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { }));
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
    /**
     * @param {?} x
     * @param {?} event
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.dateChanged = /**
     * @param {?} x
     * @param {?} event
     * @return {?}
     */
    function (x, event) {
        if (x === 'from') {
            this.fromDate = event.value;
        }
        else {
            this.toDate = event.value;
        }
    };
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.filter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.displayData = this.evantData.filter((/**
         * @param {?} singleEvent
         * @return {?}
         */
        function (singleEvent) {
            return (Date.parse(singleEvent.creationTime) > Date.parse(_this.fromDate) &&
                Date.parse(singleEvent.creationTime) < Date.parse(_this.toDate));
        }));
    };
    /**
     * @param {?} key
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.openDialog = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line: no-use-before-declare
        /** @type {?} */
        var dialogRef = this.dialog.open(ImageViewerDialog, {
            width: this.config.width + 'px',
            height: this.config.height + 'px',
            data: { url: this.url },
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { }));
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
                // 1644
                //211
                this.events.listBySource$(this.config.device.id, { pageSize: 2000 }, {
                    hot: true,
                    realtime: true,
                })
                    .subscribe((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) {
                    if (_this.realtimeState) {
                        console.log(data);
                        _this.evantData = tslib_1.__spread(data);
                        _this.evantData.sort((/**
                         * @param {?} a
                         * @param {?} b
                         * @return {?}
                         */
                        function (a, b) {
                            return a.creationTime > b.creationTime
                                ? -1
                                : a.creationTime < b.creationTime
                                    ? 1
                                    : 0;
                        }));
                        _this.displayData = _this.evantData;
                        setTimeout((/**
                         * @return {?}
                         */
                        function () { return _this.loadImage(); }), 2000);
                        //  this.loadImage();
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
    /**
     * @param {?} event
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.stepperselectected = /**
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
                    template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div style=\"height: 40px;\">\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button type=\"button\" class=\"button\" (click)=\"setSlideShow()\">\r\n        <span class=\"fa fa-slideshare\"></span>\r\n       </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n  <div style=\"margin-left: 15px;\">\r\n    <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\"  (dateInput) =\"dateChanged('from',$event)\"/>\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" (dateInput) =\"dateChanged('to',$event)\" />\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter()\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button>\r\n  \r\n  </div>\r\n    \r\n  \r\n<!-- Carousel -->\r\n<!-- (activeSlideChange)= \"carouselChanged($event)\" -->\r\n<!-- <div style = \"width:300px; height: 300px; margin-left: auto;margin-right: auto;\" *ngIf= \"slideshow == true\">\r\n  <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n    <slide *ngFor =\"let event of evantData\">\r\n      <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" style=\"width: 300px; height: 300px;\">\r\n      <div class=\"carousel-caption d-none d-md-block\" style=\"background-color: rgba(0, 0, 0, 0.2)\">\r\n        <dl>\r\n          <dt>Time</dt>\r\n          <dd>{{event.time}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Image Type</dt>\r\n          <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Severity</dt>\r\n          <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Device Name</dt>\r\n          <dd>{{event.source.name}}</dd>\r\n        </dl>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n</div> -->\r\n\r\n <div style=\"margin-left: 70px;\" >\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of displayData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0\\n yyyy HH:mm'}}</label>    {{event.text}} </ng-template>\r\n    \r\n        <div class=\"details-div\">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Classification </dt>\r\n                <dd>{{event.Classification}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Type </dt>\r\n                <dd>{{event.type}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Severity</dt>\r\n                <dd>{{event.Severity}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" (error)=\"errorInloading($event)\" class=\"stepper-img\" (click)=\"openDialog(event.Image)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px;color:#677680!important}dt{font-weight:700;line-height:1.428;display:inline}dd{line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:16px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;top:15px;font-size:10px;width:60px;white-space:initial;text-align:right}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-size:100% 100%}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.left{left:-50px}.right{right:-50px}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}"]
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
    GpS3ImageViewerComponent.prototype.displayData;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.slideshow;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.noWrapSlides;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.firstCall;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.fromDate;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.toDate;
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
                    // tslint:disable-next-line: component-selector
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFHZDtJQU9FLGtDQUNTLE1BQWlCLEVBQ2pCLE1BQW9CLEVBQ3BCLGlCQUF5QyxFQUN6Qyx1QkFBcUM7UUFIckMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBd0I7UUFDekMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBSzlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENB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QUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0Isd0lBQXVDOztpQkFFeEM7Ozs7Z0JBcktDLFlBQVk7Z0JBSUwsWUFBWTtnREF1S2hCLE1BQU0sU0FBQyxlQUFlOztJQU0zQix3QkFBQztDQUFBLEFBakJELElBaUJDO1NBVlksaUJBQWlCOzs7SUFFMUIsc0NBQWlEOztJQUNqRCxvREFBNEM7O0lBQzVDLGlDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1hdFN0ZXBwZXIsXHJcbiAgTWF0RGlhbG9nLFxyXG4gIE1BVF9ESUFMT0dfREFUQSxcclxuICBNYXREaWFsb2dSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ncC1zMy1pbWFnZS12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJ0BjOHkvY2xpZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCAqIGFzIERlZmF1bHRJbWFnZSBmcm9tICcuL2dwLWRlZmF1bHQtaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltYWdlVmlld2VyIH0gZnJvbSAnLi9jYXJvdXNlbC1pbWFnZS12aWV3ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZ3AtczMtaW1hZ2Utdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3AtczMtaW1hZ2Utdmlld2VyLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dwLXMzLWltYWdlLXZpZXdlci5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50U2VydmljZSxcclxuICAgIHB1YmxpYyBpbWFnZVZpZXdyU2VydmljZTogR3BTM0ltYWdlVmlld2VyU2VydmljZSxcclxuICAgIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyXHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgQElucHV0KCkgY29uZmlnO1xyXG4gIGlzTGluZWFyID0gZmFsc2U7XHJcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuICB1cmwgPSAnJztcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICByZWFsdGltZVN0YXRlID0gdHJ1ZTtcclxuICBldmFudERhdGEgPSBbXTtcclxuICBkaXNwbGF5RGF0YSA9IFtdO1xyXG4gIHNsaWRlc2hvdyA9IGZhbHNlO1xyXG4gIG5vV3JhcFNsaWRlcyA9IGZhbHNlO1xyXG4gIGZpcnN0Q2FsbCA9IGZhbHNlO1xyXG4gIGZyb21EYXRlID0gJyc7XHJcbiAgdG9EYXRlID0gJyc7XHJcbiAgQFZpZXdDaGlsZCgnc3RlcHBlcicpIHN0ZXBwZXI6IE1hdFN0ZXBwZXI7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWxpZmUtY3ljbGUtaW50ZXJmYWNlXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZpcnN0Q2FsbCA9IHRydWU7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcbiAgYXN5bmMgcmVmcmVzaCgpIHtcclxuICAgIHRoaXMuZnJvbURhdGUgPSAnJztcclxuICAgIHRoaXMudG9EYXRlID0gJyc7XHJcbiAgICB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmZldGNoUzModGhpcy5jb25maWcpO1xyXG4gICAgYXdhaXQgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JJbmxvYWRpbmcoZXZlbnQpIHtcclxuICAgIC8vIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIERlZmF1bHRJbWFnZS5kZWZhdWx0SW1hZ2U7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyBEZWZhdWx0SW1hZ2UuZGVmYXVsdEltYWdlO1xyXG4gIH1cclxuICBsb2FkSW1hZ2UoKSB7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJykge1xyXG4gICAgICB0aGlzLmZldGNoSW1nKFxyXG4gICAgICAgIHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLkltYWdlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVybCA9IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZ2V0SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS5JbWFnZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRTbGlkZVNob3coKSB7XHJcbiAgICB0aGlzLnNsaWRlc2hvdyA9ICF0aGlzLnNsaWRlc2hvdztcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ2Fyb3VzZWxJbWFnZVZpZXdlciwge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggKyAncHgnLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCArICdweCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBldmVudERhdGE6IHRoaXMuZXZhbnREYXRhLFxyXG4gICAgICAgIGJhc2VVcmw6XHJcbiAgICAgICAgICB0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID09PSAnYmFzZVVybCcgPyB0aGlzLmNvbmZpZy5iYXNlVXJsIDogJycsXHJcbiAgICAgICAgd2lkdGg6IE51bWJlcih0aGlzLmNvbmZpZy53aWR0aCkgLSAxMDAgKyAncHgnLFxyXG4gICAgICAgIGhlaWdodDogTnVtYmVyKHRoaXMuY29uZmlnLmhlaWdodCkgLSAxMDAgKyAncHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoSW1nKHVybCkge1xyXG4gICAgY29uc3QgeCA9IGF3YWl0IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hJbWFnZUZyb21CYXNlVXJsKHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyB4WydlbmNvZGVkU3RyaW5nJ107XHJcbiAgfVxyXG4gIGRhdGVDaGFuZ2VkKHgsIGV2ZW50KSB7XHJcbiAgICBpZiAoeCA9PT0gJ2Zyb20nKSB7XHJcbiAgICAgIHRoaXMuZnJvbURhdGUgPSBldmVudC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9EYXRlID0gZXZlbnQudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZpbHRlcigpIHtcclxuICAgIHRoaXMuZGlzcGxheURhdGEgPSB0aGlzLmV2YW50RGF0YS5maWx0ZXIoKHNpbmdsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgRGF0ZS5wYXJzZShzaW5nbGVFdmVudC5jcmVhdGlvblRpbWUpID4gRGF0ZS5wYXJzZSh0aGlzLmZyb21EYXRlKSAmJlxyXG4gICAgICAgIERhdGUucGFyc2Uoc2luZ2xlRXZlbnQuY3JlYXRpb25UaW1lKSA8IERhdGUucGFyc2UodGhpcy50b0RhdGUpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb3BlbkRpYWxvZyhrZXkpOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEltYWdlVmlld2VyRGlhbG9nLCB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCArICdweCcsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgZGF0YTogeyB1cmw6IHRoaXMudXJsIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hFdmVudHMoKSB7XHJcbiAgICAvLyB0aGlzLmNvbmZpZy5kZXZpY2UuaWRcclxuICAgIC8vIDE2NDRcclxuICAgIC8vMjExXHJcbiAgICB0aGlzLmV2ZW50cy5saXN0QnlTb3VyY2UkKFxyXG4gICAgICB0aGlzLmNvbmZpZy5kZXZpY2UuaWQsXHJcbiAgICAgICAgeyBwYWdlU2l6ZTogMjAwMCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhvdDogdHJ1ZSxcclxuICAgICAgICAgIHJlYWx0aW1lOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhbHRpbWVTdGF0ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmV2YW50RGF0YSA9IFsuLi5kYXRhXTtcclxuICAgICAgICAgIHRoaXMuZXZhbnREYXRhLnNvcnQoKGEsIGIpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5jcmVhdGlvblRpbWUgPiBiLmNyZWF0aW9uVGltZVxyXG4gICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICA6IGEuY3JlYXRpb25UaW1lIDwgYi5jcmVhdGlvblRpbWVcclxuICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSB0aGlzLmV2YW50RGF0YTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkSW1hZ2UoKSwgMjAwMCk7XHJcbiAgICAgICAgLy8gIHRoaXMubG9hZEltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5yZWFsdGltZVN0YXRlID0gIXRoaXMucmVhbHRpbWVTdGF0ZTtcclxuICAgIGlmICh0aGlzLnJlYWx0aW1lU3RhdGUpIHtcclxuICAgICAgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RlcHBlcnNlbGVjdGVjdGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZXZlbnQuc2VsZWN0ZWRJbmRleDtcclxuICAgIHRoaXMubG9hZEltYWdlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW1hZ2Utdmlld2VyLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS12aWV3ZXItZGlhbG9nLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydpbWFnZS12aWV3ZXItZGlhbG9nLmNzcyddLFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyRGlhbG9nIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZVZpZXdlckRpYWxvZz4sXHJcbiAgICBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YVxyXG4gICkge31cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19