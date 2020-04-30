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
        if (this.evantData.length > 0 && this.evantData[this.selectedIndex].Image !== undefined) {
            if (this.config.imgSrcType === 'baseUrl') {
                this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].Image);
            }
            else {
                this.url = this.imageViewrService.getImage(this.evantData[this.selectedIndex].Image);
            }
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
            if (singleEvent.creationTime !== undefined) {
                return (Date.parse(singleEvent.creationTime) > Date.parse(_this.fromDate) &&
                    Date.parse(singleEvent.creationTime) < Date.parse(_this.toDate));
            }
            return false;
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
                            if (a.creationTime !== undefined && b.creationTime !== undefined) {
                                return a.creationTime > b.creationTime
                                    ? -1
                                    : a.creationTime < b.creationTime
                                        ? 1
                                        : 0;
                            }
                            return 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFHZDtJQU9FLGtDQUNTLE1BQWlCLEVBQ2pCLE1BQW9CLEVBQ3BCLGlCQUF5QyxFQUN6Qyx1QkFBcUM7UUFIckMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBd0I7UUFDekMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBSzlDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQU0sR0FBRyxFQUFFLENBQUM7SUFmVCxDQUFDO0lBa0JKLHFEQUFxRDs7Ozs7SUFDckQsMkNBQVE7Ozs7O0lBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQzs7OztJQUNLLDBDQUFPOzs7SUFBYjs7Ozs7d0JBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7d0JBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO3dCQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDNUMscUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFBOzt3QkFBeEIsU0FBd0IsQ0FBQzs7Ozs7S0FDMUI7Ozs7O0lBRUQsaURBQWM7Ozs7SUFBZCxVQUFlLEtBQUs7UUFDbEIsb0VBQW9FO1FBQ3BFLElBQUksQ0FBQyxHQUFHLEdBQUcseUJBQXlCLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNuRSxDQUFDOzs7O0lBQ0QsNENBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQ3hGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO2dCQUN4QyxJQUFJLENBQUMsUUFBUSxDQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FDL0QsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUN6QyxDQUFDO2FBQ0g7U0FDRjtJQUNILENBQUM7Ozs7SUFDRCwrQ0FBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7WUFDM0IsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ3RELEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2pDLElBQUksRUFBRTtnQkFDSixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7Z0JBQ3pCLE9BQU8sRUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNqRSxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUk7Z0JBQzdDLE1BQU0sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSTthQUNoRDtTQUNGLENBQUM7UUFFRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTSxJQUFNLENBQUMsRUFBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBRUssMkNBQVE7Ozs7SUFBZCxVQUFlLEdBQUc7Ozs7OzRCQUNOLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQXZFLENBQUMsR0FBRyxTQUFtRTt3QkFDN0UsSUFBSSxDQUFDLEdBQUcsR0FBRyx5QkFBeUIsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7Ozs7O0tBQzNEOzs7Ozs7SUFDRCw4Q0FBVzs7Ozs7SUFBWCxVQUFZLENBQUMsRUFBRSxLQUFLO1FBQ2xCLElBQUksQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDN0I7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7SUFDRCx5Q0FBTTs7O0lBQU47UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxXQUFXO1lBQ25ELElBQUssV0FBVyxDQUFDLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQzNDLE9BQU8sQ0FDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUMvRCxDQUFDO2FBQ0g7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFDRCw2Q0FBVTs7OztJQUFWLFVBQVcsR0FBRzs7O1lBRU4sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3BELEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2pDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBQ3hCLENBQUM7UUFFRixTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsTUFBTSxJQUFNLENBQUMsRUFBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFSyw4Q0FBVzs7O0lBQWpCOzs7O2dCQUNFLHdCQUF3QjtnQkFDeEIsT0FBTztnQkFDUCxLQUFLO2dCQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQ25CLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUNsQjtvQkFDRSxHQUFHLEVBQUUsSUFBSTtvQkFDVCxRQUFRLEVBQUUsSUFBSTtpQkFDZixDQUNGO3FCQUNBLFNBQVM7Ozs7Z0JBQUMsVUFBQyxJQUFJO29CQUNkLElBQUksS0FBSSxDQUFDLGFBQWEsRUFBRTt3QkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDbEIsS0FBSSxDQUFDLFNBQVMsb0JBQU8sSUFBSSxDQUFDLENBQUM7d0JBQzNCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTs7Ozs7d0JBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDdkIsSUFBSyxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsWUFBWSxLQUFLLFNBQVMsRUFBRTtnQ0FDakUsT0FBTyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZO29DQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZO3dDQUNqQyxDQUFDLENBQUMsQ0FBQzt3Q0FDSCxDQUFDLENBQUMsQ0FBQyxDQUFDOzZCQUNMOzRCQUNELE9BQU8sQ0FBQyxDQUFDO3dCQUNYLENBQUMsRUFBQyxDQUFDO3dCQUNILEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDbEMsVUFBVTs7O3dCQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxFQUFFLEVBQWhCLENBQWdCLEdBQUUsSUFBSSxDQUFDLENBQUM7d0JBQzNDLHFCQUFxQjtxQkFDcEI7Z0JBQ0gsQ0FBQyxFQUFDLENBQUM7Ozs7S0FDTjs7OztJQUNELHlDQUFNOzs7SUFBTjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7SUFDSCxDQUFDOzs7OztJQUVELHFEQUFrQjs7OztJQUFsQixVQUFtQixLQUFLO1FBQ3RCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkF6SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLHV0S0FBd0M7b0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBbkJDLFNBQVM7Z0JBS0YsWUFBWTtnQkFEWixzQkFBc0I7Z0JBRXRCLFlBQVk7Ozt5QkF1QmxCLEtBQUs7MEJBYUwsU0FBUyxTQUFDLFNBQVM7O0lBOEh0QiwrQkFBQztDQUFBLEFBMUpELElBMEpDO1NBcEpZLHdCQUF3Qjs7O0lBU25DLDBDQUFnQjs7SUFDaEIsNENBQWlCOztJQUNqQixrREFBdUI7O0lBQ3ZCLHVDQUFTOztJQUNULGlEQUFrQjs7SUFDbEIsaURBQXFCOztJQUNyQiw2Q0FBZTs7SUFDZiwrQ0FBaUI7O0lBQ2pCLDZDQUFrQjs7SUFDbEIsZ0RBQXFCOztJQUNyQiw2Q0FBa0I7O0lBQ2xCLDRDQUFjOztJQUNkLDBDQUFZOztJQUNaLDJDQUEwQzs7SUFwQnhDLDBDQUF3Qjs7SUFDeEIsMENBQTJCOztJQUMzQixxREFBZ0Q7O0lBQ2hELDJEQUE0Qzs7QUFpSmhEO0lBUUUsMkJBQ1MsU0FBMEMsRUFDMUMsdUJBQXFDLEVBQ1osSUFBZ0I7UUFGekMsY0FBUyxHQUFULFNBQVMsQ0FBaUM7UUFDMUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBWTtJQUMvQyxDQUFDOzs7O0lBRUoscUNBQVM7OztJQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFoQkYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQix3SUFBdUM7O2lCQUV4Qzs7OztnQkE3S0MsWUFBWTtnQkFJTCxZQUFZO2dEQStLaEIsTUFBTSxTQUFDLGVBQWU7O0lBTTNCLHdCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FWWSxpQkFBaUI7OztJQUUxQixzQ0FBaUQ7O0lBQ2pELG9EQUE0Qzs7SUFDNUMsaUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgTWF0U3RlcHBlcixcclxuICBNYXREaWFsb2csXHJcbiAgTUFUX0RJQUxPR19EQVRBLFxyXG4gIE1hdERpYWxvZ1JlZixcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnQGM4eS9jbGllbnQnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0ICogYXMgRGVmYXVsdEltYWdlIGZyb20gJy4vZ3AtZGVmYXVsdC1pbWFnZSc7XHJcbmltcG9ydCB7IENhcm91c2VsSW1hZ2VWaWV3ZXIgfSBmcm9tICcuL2Nhcm91c2VsLWltYWdlLXZpZXdlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1ncC1zMy1pbWFnZS12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9ncC1zMy1pbWFnZS12aWV3ZXIuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ3AtczMtaW1hZ2Utdmlld2VyLmNzcyddLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHVibGljIGV2ZW50czogRXZlbnRTZXJ2aWNlLFxyXG4gICAgcHVibGljIGltYWdlVmlld3JTZXJ2aWNlOiBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIF9Eb21TYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXJcclxuICApIHt9XHJcblxyXG5cclxuICBASW5wdXQoKSBjb25maWc7XHJcbiAgaXNMaW5lYXIgPSBmYWxzZTtcclxuICBwYW5lbE9wZW5TdGF0ZSA9IGZhbHNlO1xyXG4gIHVybCA9ICcnO1xyXG4gIHNlbGVjdGVkSW5kZXggPSAwO1xyXG4gIHJlYWx0aW1lU3RhdGUgPSB0cnVlO1xyXG4gIGV2YW50RGF0YSA9IFtdO1xyXG4gIGRpc3BsYXlEYXRhID0gW107XHJcbiAgc2xpZGVzaG93ID0gZmFsc2U7XHJcbiAgbm9XcmFwU2xpZGVzID0gZmFsc2U7XHJcbiAgZmlyc3RDYWxsID0gZmFsc2U7XHJcbiAgZnJvbURhdGUgPSAnJztcclxuICB0b0RhdGUgPSAnJztcclxuICBAVmlld0NoaWxkKCdzdGVwcGVyJykgc3RlcHBlcjogTWF0U3RlcHBlcjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1c2UtbGlmZS1jeWNsZS1pbnRlcmZhY2VcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmlyc3RDYWxsID0gdHJ1ZTtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuICBhc3luYyByZWZyZXNoKCkge1xyXG4gICAgdGhpcy5mcm9tRGF0ZSA9ICcnO1xyXG4gICAgdGhpcy50b0RhdGUgPSAnJztcclxuICAgIHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hTMyh0aGlzLmNvbmZpZyk7XHJcbiAgICBhd2FpdCB0aGlzLmZldGNoRXZlbnRzKCk7XHJcbiAgfVxyXG5cclxuICBlcnJvcklubG9hZGluZyhldmVudCkge1xyXG4gICAgLy8gdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgRGVmYXVsdEltYWdlLmRlZmF1bHRJbWFnZTtcclxuICAgIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIERlZmF1bHRJbWFnZS5kZWZhdWx0SW1hZ2U7XHJcbiAgfVxyXG4gIGxvYWRJbWFnZSgpIHtcclxuICAgIHRoaXMudXJsID0gJyc7XHJcbiAgICBpZiAoIHRoaXMuZXZhbnREYXRhLmxlbmd0aCA+IDAgJiYgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS5JbWFnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID09PSAnYmFzZVVybCcpIHtcclxuICAgICAgICB0aGlzLmZldGNoSW1nKFxyXG4gICAgICAgICAgdGhpcy5jb25maWcuYmFzZVVybCArIHRoaXMuZXZhbnREYXRhW3RoaXMuc2VsZWN0ZWRJbmRleF0uSW1hZ2VcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudXJsID0gdGhpcy5pbWFnZVZpZXdyU2VydmljZS5nZXRJbWFnZShcclxuICAgICAgICAgIHRoaXMuZXZhbnREYXRhW3RoaXMuc2VsZWN0ZWRJbmRleF0uSW1hZ2VcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldFNsaWRlU2hvdygpIHtcclxuICAgIHRoaXMuc2xpZGVzaG93ID0gIXRoaXMuc2xpZGVzaG93O1xyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDYXJvdXNlbEltYWdlVmlld2VyLCB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCArICdweCcsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGV2ZW50RGF0YTogdGhpcy5ldmFudERhdGEsXHJcbiAgICAgICAgYmFzZVVybDpcclxuICAgICAgICAgIHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJyA/IHRoaXMuY29uZmlnLmJhc2VVcmwgOiAnJyxcclxuICAgICAgICB3aWR0aDogTnVtYmVyKHRoaXMuY29uZmlnLndpZHRoKSAtIDEwMCArICdweCcsXHJcbiAgICAgICAgaGVpZ2h0OiBOdW1iZXIodGhpcy5jb25maWcuaGVpZ2h0KSAtIDEwMCArICdweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hJbWcodXJsKSB7XHJcbiAgICBjb25zdCB4ID0gYXdhaXQgdGhpcy5pbWFnZVZpZXdyU2VydmljZS5mZXRjaEltYWdlRnJvbUJhc2VVcmwodXJsKS50b1Byb21pc2UoKTtcclxuICAgIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIHhbJ2VuY29kZWRTdHJpbmcnXTtcclxuICB9XHJcbiAgZGF0ZUNoYW5nZWQoeCwgZXZlbnQpIHtcclxuICAgIGlmICh4ID09PSAnZnJvbScpIHtcclxuICAgICAgdGhpcy5mcm9tRGF0ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50b0RhdGUgPSBldmVudC52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgZmlsdGVyKCkge1xyXG4gICAgdGhpcy5kaXNwbGF5RGF0YSA9IHRoaXMuZXZhbnREYXRhLmZpbHRlcigoc2luZ2xlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKCBzaW5nbGVFdmVudC5jcmVhdGlvblRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICBEYXRlLnBhcnNlKHNpbmdsZUV2ZW50LmNyZWF0aW9uVGltZSkgPiBEYXRlLnBhcnNlKHRoaXMuZnJvbURhdGUpICYmXHJcbiAgICAgICAgICBEYXRlLnBhcnNlKHNpbmdsZUV2ZW50LmNyZWF0aW9uVGltZSkgPCBEYXRlLnBhcnNlKHRoaXMudG9EYXRlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9wZW5EaWFsb2coa2V5KTogdm9pZCB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZVxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXdlckRpYWxvZywge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggKyAncHgnLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCArICdweCcsXHJcbiAgICAgIGRhdGE6IHsgdXJsOiB0aGlzLnVybCB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoRXZlbnRzKCkge1xyXG4gICAgLy8gdGhpcy5jb25maWcuZGV2aWNlLmlkXHJcbiAgICAvLyAxNjQ0XHJcbiAgICAvLzIxMVxyXG4gICAgdGhpcy5ldmVudHMubGlzdEJ5U291cmNlJChcclxuICAgICAgdGhpcy5jb25maWcuZGV2aWNlLmlkLFxyXG4gICAgICAgIHsgcGFnZVNpemU6IDIwMDAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBob3Q6IHRydWUsXHJcbiAgICAgICAgICByZWFsdGltZTogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWx0aW1lU3RhdGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgdGhpcy5ldmFudERhdGEgPSBbLi4uZGF0YV07XHJcbiAgICAgICAgICB0aGlzLmV2YW50RGF0YS5zb3J0KChhLCBiKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKCBhLmNyZWF0aW9uVGltZSAhPT0gdW5kZWZpbmVkICYmIGIuY3JlYXRpb25UaW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gYS5jcmVhdGlvblRpbWUgPiBiLmNyZWF0aW9uVGltZVxyXG4gICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICA6IGEuY3JlYXRpb25UaW1lIDwgYi5jcmVhdGlvblRpbWVcclxuICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSB0aGlzLmV2YW50RGF0YTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkSW1hZ2UoKSwgMjAwMCk7XHJcbiAgICAgICAgLy8gIHRoaXMubG9hZEltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5yZWFsdGltZVN0YXRlID0gIXRoaXMucmVhbHRpbWVTdGF0ZTtcclxuICAgIGlmICh0aGlzLnJlYWx0aW1lU3RhdGUpIHtcclxuICAgICAgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RlcHBlcnNlbGVjdGVjdGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZXZlbnQuc2VsZWN0ZWRJbmRleDtcclxuICAgIHRoaXMubG9hZEltYWdlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW1hZ2Utdmlld2VyLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS12aWV3ZXItZGlhbG9nLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydpbWFnZS12aWV3ZXItZGlhbG9nLmNzcyddLFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyRGlhbG9nIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZVZpZXdlckRpYWxvZz4sXHJcbiAgICBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YVxyXG4gICkge31cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19