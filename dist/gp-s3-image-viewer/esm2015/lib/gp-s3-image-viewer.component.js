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
    /**
     * @return {?}
     */
    ngOnInit() {
        this.firstCall = true;
        this.refresh();
    }
    /**
     * @return {?}
     */
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.fromDate = '';
            this.toDate = '';
            this.imageViewrService.fetchS3(this.config);
            yield this.fetchEvents();
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    errorInloading(event) {
        // this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
        this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
    }
    /**
     * @return {?}
     */
    loadImage() {
        this.url = '';
        if (this.config.imgSrcType === 'baseUrl') {
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].Image);
        }
        else {
            this.url = this.imageViewrService.getImage(this.evantData[this.selectedIndex].Image);
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
        (result) => { }));
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
    /**
     * @param {?} x
     * @param {?} event
     * @return {?}
     */
    dateChanged(x, event) {
        if (x === 'from') {
            this.fromDate = event.value;
        }
        else {
            this.toDate = event.value;
        }
    }
    /**
     * @return {?}
     */
    filter() {
        this.displayData = this.evantData.filter((/**
         * @param {?} singleEvent
         * @return {?}
         */
        (singleEvent) => {
            return (Date.parse(singleEvent.creationTime) > Date.parse(this.fromDate) &&
                Date.parse(singleEvent.creationTime) < Date.parse(this.toDate));
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    openDialog(key) {
        // tslint:disable-next-line: no-use-before-declare
        /** @type {?} */
        const dialogRef = this.dialog.open(ImageViewerDialog, {
            width: this.config.width + 'px',
            height: this.config.height + 'px',
            data: { url: this.url },
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        (result) => { }));
    }
    /**
     * @return {?}
     */
    fetchEvents() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            (data) => {
                if (this.realtimeState) {
                    console.log(data);
                    this.evantData = [...data];
                    this.evantData.sort((/**
                     * @param {?} a
                     * @param {?} b
                     * @return {?}
                     */
                    (a, b) => {
                        return a.creationTime > b.creationTime
                            ? -1
                            : a.creationTime < b.creationTime
                                ? 1
                                : 0;
                    }));
                    this.displayData = this.evantData;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => this.loadImage()), 2000);
                    //  this.loadImage();
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
                template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div style=\"height: 40px;\">\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button type=\"button\" class=\"button\" (click)=\"setSlideShow()\">\r\n        <span class=\"fa fa-slideshare\"></span>\r\n       </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n  <div style=\"margin-left: 15px;\">\r\n    <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\"  (dateInput) =\"dateChanged('from',$event)\"/>\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" (dateInput) =\"dateChanged('to',$event)\" />\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter()\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button>\r\n  \r\n  </div>\r\n    \r\n  \r\n<!-- Carousel -->\r\n<!-- (activeSlideChange)= \"carouselChanged($event)\" -->\r\n<!-- <div style = \"width:300px; height: 300px; margin-left: auto;margin-right: auto;\" *ngIf= \"slideshow == true\">\r\n  <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n    <slide *ngFor =\"let event of evantData\">\r\n      <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" style=\"width: 300px; height: 300px;\">\r\n      <div class=\"carousel-caption d-none d-md-block\" style=\"background-color: rgba(0, 0, 0, 0.2)\">\r\n        <dl>\r\n          <dt>Time</dt>\r\n          <dd>{{event.time}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Image Type</dt>\r\n          <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Severity</dt>\r\n          <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Device Name</dt>\r\n          <dd>{{event.source.name}}</dd>\r\n        </dl>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n</div> -->\r\n\r\n <div style=\"margin-left: 70px;\" >\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of displayData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0\\n yyyy HH:mm'}}</label>    {{event.text}} </ng-template>\r\n    \r\n        <div class=\"details-div\">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Classification </dt>\r\n                <dd>{{event.Classification}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Type </dt>\r\n                <dd>{{event.type}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Severity</dt>\r\n                <dd>{{event.Severity}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" (error)=\"errorInloading($event)\" class=\"stepper-img\" (click)=\"openDialog(event.Image)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px;color:#677680!important}dt{font-weight:700;line-height:1.428;display:inline}dd{line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:16px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;top:15px;font-size:10px;width:60px;white-space:initial;text-align:right}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-size:100% 100%}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.left{left:-50px}.right{right:-50px}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}"]
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
// tslint:disable-next-line: component-class-suffix
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
                // tslint:disable-next-line: component-selector
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFTZCxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7O0lBQ25DLFlBQ1MsTUFBaUIsRUFDakIsTUFBb0IsRUFDcEIsaUJBQXlDLEVBQ3pDLHVCQUFxQztRQUhyQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUN6Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQWM7UUFLOUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1Qsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7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TUFBTSxTQUFDLGVBQWU7Ozs7SUFGdkIsc0NBQWlEOztJQUNqRCxvREFBNEM7O0lBQzVDLGlDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIE1hdFN0ZXBwZXIsXHJcbiAgTWF0RGlhbG9nLFxyXG4gIE1BVF9ESUFMT0dfREFUQSxcclxuICBNYXREaWFsb2dSZWYsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ncC1zMy1pbWFnZS12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJ0BjOHkvY2xpZW50JztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCAqIGFzIERlZmF1bHRJbWFnZSBmcm9tICcuL2dwLWRlZmF1bHQtaW1hZ2UnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltYWdlVmlld2VyIH0gZnJvbSAnLi9jYXJvdXNlbC1pbWFnZS12aWV3ZXInO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZ3AtczMtaW1hZ2Utdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3AtczMtaW1hZ2Utdmlld2VyLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dwLXMzLWltYWdlLXZpZXdlci5jc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgIHB1YmxpYyBldmVudHM6IEV2ZW50U2VydmljZSxcclxuICAgIHB1YmxpYyBpbWFnZVZpZXdyU2VydmljZTogR3BTM0ltYWdlVmlld2VyU2VydmljZSxcclxuICAgIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyXHJcbiAgKSB7fVxyXG5cclxuXHJcbiAgQElucHV0KCkgY29uZmlnO1xyXG4gIGlzTGluZWFyID0gZmFsc2U7XHJcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuICB1cmwgPSAnJztcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICByZWFsdGltZVN0YXRlID0gdHJ1ZTtcclxuICBldmFudERhdGEgPSBbXTtcclxuICBkaXNwbGF5RGF0YSA9IFtdO1xyXG4gIHNsaWRlc2hvdyA9IGZhbHNlO1xyXG4gIG5vV3JhcFNsaWRlcyA9IGZhbHNlO1xyXG4gIGZpcnN0Q2FsbCA9IGZhbHNlO1xyXG4gIGZyb21EYXRlID0gJyc7XHJcbiAgdG9EYXRlID0gJyc7XHJcbiAgQFZpZXdDaGlsZCgnc3RlcHBlcicpIHN0ZXBwZXI6IE1hdFN0ZXBwZXI7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdXNlLWxpZmUtY3ljbGUtaW50ZXJmYWNlXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmZpcnN0Q2FsbCA9IHRydWU7XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcbiAgYXN5bmMgcmVmcmVzaCgpIHtcclxuICAgIHRoaXMuZnJvbURhdGUgPSAnJztcclxuICAgIHRoaXMudG9EYXRlID0gJyc7XHJcbiAgICB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmZldGNoUzModGhpcy5jb25maWcpO1xyXG4gICAgYXdhaXQgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gIH1cclxuXHJcbiAgZXJyb3JJbmxvYWRpbmcoZXZlbnQpIHtcclxuICAgIC8vIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIERlZmF1bHRJbWFnZS5kZWZhdWx0SW1hZ2U7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyBEZWZhdWx0SW1hZ2UuZGVmYXVsdEltYWdlO1xyXG4gIH1cclxuICBsb2FkSW1hZ2UoKSB7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJykge1xyXG4gICAgICB0aGlzLmZldGNoSW1nKFxyXG4gICAgICAgIHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLkltYWdlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVybCA9IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZ2V0SW1hZ2UoXHJcbiAgICAgICAgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS5JbWFnZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBzZXRTbGlkZVNob3coKSB7XHJcbiAgICB0aGlzLnNsaWRlc2hvdyA9ICF0aGlzLnNsaWRlc2hvdztcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ2Fyb3VzZWxJbWFnZVZpZXdlciwge1xyXG4gICAgICB3aWR0aDogdGhpcy5jb25maWcud2lkdGggKyAncHgnLFxyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCArICdweCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBldmVudERhdGE6IHRoaXMuZXZhbnREYXRhLFxyXG4gICAgICAgIGJhc2VVcmw6XHJcbiAgICAgICAgICB0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID09PSAnYmFzZVVybCcgPyB0aGlzLmNvbmZpZy5iYXNlVXJsIDogJycsXHJcbiAgICAgICAgd2lkdGg6IE51bWJlcih0aGlzLmNvbmZpZy53aWR0aCkgLSAxMDAgKyAncHgnLFxyXG4gICAgICAgIGhlaWdodDogTnVtYmVyKHRoaXMuY29uZmlnLmhlaWdodCkgLSAxMDAgKyAncHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKChyZXN1bHQpID0+IHt9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoSW1nKHVybCkge1xyXG4gICAgY29uc3QgeCA9IGF3YWl0IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hJbWFnZUZyb21CYXNlVXJsKHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyB4WydlbmNvZGVkU3RyaW5nJ107XHJcbiAgfVxyXG4gIGRhdGVDaGFuZ2VkKHgsIGV2ZW50KSB7XHJcbiAgICBpZiAoeCA9PT0gJ2Zyb20nKSB7XHJcbiAgICAgIHRoaXMuZnJvbURhdGUgPSBldmVudC52YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9EYXRlID0gZXZlbnQudmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZpbHRlcigpIHtcclxuICAgIHRoaXMuZGlzcGxheURhdGEgPSB0aGlzLmV2YW50RGF0YS5maWx0ZXIoKHNpbmdsZUV2ZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgRGF0ZS5wYXJzZShzaW5nbGVFdmVudC5jcmVhdGlvblRpbWUpID4gRGF0ZS5wYXJzZSh0aGlzLmZyb21EYXRlKSAmJlxyXG4gICAgICAgIERhdGUucGFyc2Uoc2luZ2xlRXZlbnQuY3JlYXRpb25UaW1lKSA8IERhdGUucGFyc2UodGhpcy50b0RhdGUpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb3BlbkRpYWxvZyhrZXkpOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEltYWdlVmlld2VyRGlhbG9nLCB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCArICdweCcsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgZGF0YTogeyB1cmw6IHRoaXMudXJsIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hFdmVudHMoKSB7XHJcbiAgICAvLyB0aGlzLmNvbmZpZy5kZXZpY2UuaWRcclxuICAgIC8vIDE2NDRcclxuICAgIC8vMjExXHJcbiAgICB0aGlzLmV2ZW50cy5saXN0QnlTb3VyY2UkKFxyXG4gICAgICB0aGlzLmNvbmZpZy5kZXZpY2UuaWQsXHJcbiAgICAgICAgeyBwYWdlU2l6ZTogMjAwMCB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhvdDogdHJ1ZSxcclxuICAgICAgICAgIHJlYWx0aW1lOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhbHRpbWVTdGF0ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmV2YW50RGF0YSA9IFsuLi5kYXRhXTtcclxuICAgICAgICAgIHRoaXMuZXZhbnREYXRhLnNvcnQoKGEsIGIpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5jcmVhdGlvblRpbWUgPiBiLmNyZWF0aW9uVGltZVxyXG4gICAgICAgICAgICAgID8gLTFcclxuICAgICAgICAgICAgICA6IGEuY3JlYXRpb25UaW1lIDwgYi5jcmVhdGlvblRpbWVcclxuICAgICAgICAgICAgICA/IDFcclxuICAgICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuZGlzcGxheURhdGEgPSB0aGlzLmV2YW50RGF0YTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkSW1hZ2UoKSwgMjAwMCk7XHJcbiAgICAgICAgLy8gIHRoaXMubG9hZEltYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5yZWFsdGltZVN0YXRlID0gIXRoaXMucmVhbHRpbWVTdGF0ZTtcclxuICAgIGlmICh0aGlzLnJlYWx0aW1lU3RhdGUpIHtcclxuICAgICAgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RlcHBlcnNlbGVjdGVjdGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZXZlbnQuc2VsZWN0ZWRJbmRleDtcclxuICAgIHRoaXMubG9hZEltYWdlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW1hZ2Utdmlld2VyLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICdpbWFnZS12aWV3ZXItZGlhbG9nLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydpbWFnZS12aWV3ZXItZGlhbG9nLmNzcyddLFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyRGlhbG9nIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZVZpZXdlckRpYWxvZz4sXHJcbiAgICBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YVxyXG4gICkge31cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19