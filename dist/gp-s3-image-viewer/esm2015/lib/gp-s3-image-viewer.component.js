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
        if (this.evantData.length > 0 && this.evantData[this.selectedIndex].Image !== undefined) {
            if (this.config.imgSrcType === 'baseUrl') {
                this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].Image);
            }
            else {
                this.url = this.imageViewrService.getImage(this.evantData[this.selectedIndex].Image);
            }
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
            if (singleEvent.creationTime !== undefined) {
                return (Date.parse(singleEvent.creationTime) > Date.parse(this.fromDate) &&
                    Date.parse(singleEvent.creationTime) < Date.parse(this.toDate));
            }
            return false;
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
            this.events.listBySource$(this.config.device.id, { pageSize: 2000,
                type: this.config.eventType }, {
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
                        if (a.creationTime !== undefined && b.creationTime !== undefined) {
                            return a.creationTime > b.creationTime
                                ? -1
                                : a.creationTime < b.creationTime
                                    ? 1
                                    : 0;
                        }
                        return 0;
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
                template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div style=\"height: 40px;\">\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button type=\"button\" class=\"button\" (click)=\"setSlideShow()\">\r\n        <span class=\"fa fa-slideshare\"></span>\r\n       </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n  <div style=\"margin-left: 15px;\">\r\n    <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\"  (dateInput) =\"dateChanged('from',$event)\"/>\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" (dateInput) =\"dateChanged('to',$event)\" />\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter()\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button>\r\n  \r\n  </div>\r\n    \r\n  \r\n<!-- Carousel -->\r\n<!-- (activeSlideChange)= \"carouselChanged($event)\" -->\r\n<!-- <div style = \"width:300px; height: 300px; margin-left: auto;margin-right: auto;\" *ngIf= \"slideshow == true\">\r\n  <carousel [noPause]=\"noWrapSlides\" [noWrap]=\"noWrapSlides\" (activeSlideChange)= \"carouselChanged($event)\">\r\n    <slide *ngFor =\"let event of evantData\">\r\n      <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" alt=\"first slide\"  (error)=\"errorInloading($event)\" style=\"width: 300px; height: 300px;\">\r\n      <div class=\"carousel-caption d-none d-md-block\" style=\"background-color: rgba(0, 0, 0, 0.2)\">\r\n        <dl>\r\n          <dt>Time</dt>\r\n          <dd>{{event.time}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Image Type</dt>\r\n          <dd>{{event.type.substring(event.type.indexOf(':'),event.type.indexOf(' ; ') )}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Severity</dt>\r\n          <dd>{{event.type.substr(event.type.lastIndexOf(':'))}}</dd>\r\n        </dl>\r\n        <dl>\r\n          <dt>Device Name</dt>\r\n          <dd>{{event.source.name}}</dd>\r\n        </dl>\r\n      </div>\r\n    </slide>\r\n  </carousel>\r\n</div> -->\r\n\r\n <div style=\"margin-left: 70px;\" >\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of displayData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0\\n yyyy HH:mm'}}</label>    {{event.text}} </ng-template>\r\n    \r\n        <div class=\"details-div \">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time |\u00A0date:'d\u00A0MMMM yyyy HH:mm'}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Classification </dt>\r\n                <dd>{{event.Classification}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Type </dt>\r\n                <dd>{{event.type}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Severity</dt>\r\n                <dd>{{event.Severity}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" (error)=\"errorInloading($event)\" class=\"stepper-img\" (click)=\"openDialog(event.Image)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px;color:#677680!important}dt{font-weight:700;line-height:1.428;display:inline}dd{line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:16px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;top:15px;font-size:10px;width:60px;white-space:initial;text-align:right}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:15;display:flex;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s}.carousel-control-prev{left:0}[role=button]{cursor:pointer}a:not([href]){color:inherit;text-decoration:none}.sr-only{position:absolute!important;overflow:hidden;clip:rect(0,0,0,0);margin:-1px;padding:0;width:1px;height:1px;border:0;white-space:nowrap}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background-repeat:no-repeat;background-size:100% 100%}.carousel{position:relative}ol{display:block;list-style-type:decimal;-webkit-margin-before:1em;margin-block-start:1em;-webkit-margin-after:1em;margin-block-end:1em;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:0;margin-inline-end:0;-webkit-padding-start:40px;padding-inline-start:40px}.carousel-indicators li{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:transform .6s ease-in-out}.carousel-item.active{display:block}.left{left:-50px}.right{right:-50px}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.arrow_box{position:relative;background:#88b7d5;border:4px solid #c2e1f5}.arrow_box:after,.arrow_box:before{right:100%;top:50%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.arrow_box:after{border-color:rgba(136,183,213,0);border-right-color:#88b7d5;border-width:30px;margin-top:-30px}.arrow_box:before{border-color:rgba(194,225,245,0);border-right-color:#c2e1f5;border-width:36px;margin-top:-36px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEdBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssWUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBRTlELGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFTZCxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7O0lBQ25DLFlBQ1MsTUFBaUIsRUFDakIsTUFBb0IsRUFDcEIsaUJBQXlDLEVBQ3pDLHVCQUFxQztRQUhyQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDcEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUN6Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQWM7UUFLOUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1Qsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsa0JBQWEsR0FBRyxJQUFJLENBQUM7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RCxtREFBbUQ7QUFDbkQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBQzVCLFlBQ1MsU0FBMEMsRUFDMUMsdUJBQXFDLEVBQ1osSUFBZ0I7UUFGekMsY0FBUyxHQUFULFNBQVMsQ0FBaUM7UUFDMUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBQ1osU0FBSSxHQUFKLElBQUksQ0FBWTtJQUMvQyxDQUFDOzs7O0lBRUosU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBaEJGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0Isd0lBQXVDOzthQUV4Qzs7OztZQTlLQyxZQUFZO1lBSUwsWUFBWTs0Q0FnTGhCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRnZCLHNDQUFpRDs7SUFDakQsb0RBQTRDOztJQUM1QyxpQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBNYXRTdGVwcGVyLFxyXG4gIE1hdERpYWxvZyxcclxuICBNQVRfRElBTE9HX0RBVEEsXHJcbiAgTWF0RGlhbG9nUmVmLFxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyU2VydmljZSB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICdAYzh5L2NsaWVudCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgKiBhcyBEZWZhdWx0SW1hZ2UgZnJvbSAnLi9ncC1kZWZhdWx0LWltYWdlJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJbWFnZVZpZXdlciB9IGZyb20gJy4vY2Fyb3VzZWwtaW1hZ2Utdmlld2VyJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWdwLXMzLWltYWdlLXZpZXdlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dwLXMzLWltYWdlLXZpZXdlci5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9ncC1zMy1pbWFnZS12aWV3ZXIuY3NzJ10sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdwUzNJbWFnZVZpZXdlckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICBwdWJsaWMgZXZlbnRzOiBFdmVudFNlcnZpY2UsXHJcbiAgICBwdWJsaWMgaW1hZ2VWaWV3clNlcnZpY2U6IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplclxyXG4gICkge31cclxuXHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZztcclxuICBpc0xpbmVhciA9IGZhbHNlO1xyXG4gIHBhbmVsT3BlblN0YXRlID0gZmFsc2U7XHJcbiAgdXJsID0gJyc7XHJcbiAgc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgcmVhbHRpbWVTdGF0ZSA9IHRydWU7XHJcbiAgZXZhbnREYXRhID0gW107XHJcbiAgZGlzcGxheURhdGEgPSBbXTtcclxuICBzbGlkZXNob3cgPSBmYWxzZTtcclxuICBub1dyYXBTbGlkZXMgPSBmYWxzZTtcclxuICBmaXJzdENhbGwgPSBmYWxzZTtcclxuICBmcm9tRGF0ZSA9ICcnO1xyXG4gIHRvRGF0ZSA9ICcnO1xyXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBwZXInKSBzdGVwcGVyOiBNYXRTdGVwcGVyO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVzZS1saWZlLWN5Y2xlLWludGVyZmFjZVxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5maXJzdENhbGwgPSB0cnVlO1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG4gIGFzeW5jIHJlZnJlc2goKSB7XHJcbiAgICB0aGlzLmZyb21EYXRlID0gJyc7XHJcbiAgICB0aGlzLnRvRGF0ZSA9ICcnO1xyXG4gICAgdGhpcy5pbWFnZVZpZXdyU2VydmljZS5mZXRjaFMzKHRoaXMuY29uZmlnKTtcclxuICAgIGF3YWl0IHRoaXMuZmV0Y2hFdmVudHMoKTtcclxuICB9XHJcblxyXG4gIGVycm9ySW5sb2FkaW5nKGV2ZW50KSB7XHJcbiAgICAvLyB0aGlzLnVybCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsICcgKyBEZWZhdWx0SW1hZ2UuZGVmYXVsdEltYWdlO1xyXG4gICAgdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgRGVmYXVsdEltYWdlLmRlZmF1bHRJbWFnZTtcclxuICB9XHJcbiAgbG9hZEltYWdlKCkge1xyXG4gICAgdGhpcy51cmwgPSAnJztcclxuICAgIGlmICggdGhpcy5ldmFudERhdGEubGVuZ3RoID4gMCAmJiB0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLkltYWdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgaWYgKHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJykge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hJbWcoXHJcbiAgICAgICAgICB0aGlzLmNvbmZpZy5iYXNlVXJsICsgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS5JbWFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy51cmwgPSB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmdldEltYWdlKFxyXG4gICAgICAgICAgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS5JbWFnZVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgc2V0U2xpZGVTaG93KCkge1xyXG4gICAgdGhpcy5zbGlkZXNob3cgPSAhdGhpcy5zbGlkZXNob3c7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENhcm91c2VsSW1hZ2VWaWV3ZXIsIHtcclxuICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgKyAncHgnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgZXZlbnREYXRhOiB0aGlzLmV2YW50RGF0YSxcclxuICAgICAgICBiYXNlVXJsOlxyXG4gICAgICAgICAgdGhpcy5jb25maWcuaW1nU3JjVHlwZSA9PT0gJ2Jhc2VVcmwnID8gdGhpcy5jb25maWcuYmFzZVVybCA6ICcnLFxyXG4gICAgICAgIHdpZHRoOiBOdW1iZXIodGhpcy5jb25maWcud2lkdGgpIC0gMTAwICsgJ3B4JyxcclxuICAgICAgICBoZWlnaHQ6IE51bWJlcih0aGlzLmNvbmZpZy5oZWlnaHQpIC0gMTAwICsgJ3B4JyxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgocmVzdWx0KSA9PiB7fSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaEltZyh1cmwpIHtcclxuICAgIGNvbnN0IHggPSBhd2FpdCB0aGlzLmltYWdlVmlld3JTZXJ2aWNlLmZldGNoSW1hZ2VGcm9tQmFzZVVybCh1cmwpLnRvUHJvbWlzZSgpO1xyXG4gICAgdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgeFsnZW5jb2RlZFN0cmluZyddO1xyXG4gIH1cclxuICBkYXRlQ2hhbmdlZCh4LCBldmVudCkge1xyXG4gICAgaWYgKHggPT09ICdmcm9tJykge1xyXG4gICAgICB0aGlzLmZyb21EYXRlID0gZXZlbnQudmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRvRGF0ZSA9IGV2ZW50LnZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBmaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmRpc3BsYXlEYXRhID0gdGhpcy5ldmFudERhdGEuZmlsdGVyKChzaW5nbGVFdmVudCkgPT4ge1xyXG4gICAgICBpZiAoIHNpbmdsZUV2ZW50LmNyZWF0aW9uVGltZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIERhdGUucGFyc2Uoc2luZ2xlRXZlbnQuY3JlYXRpb25UaW1lKSA+IERhdGUucGFyc2UodGhpcy5mcm9tRGF0ZSkgJiZcclxuICAgICAgICAgIERhdGUucGFyc2Uoc2luZ2xlRXZlbnQuY3JlYXRpb25UaW1lKSA8IERhdGUucGFyc2UodGhpcy50b0RhdGUpXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb3BlbkRpYWxvZyhrZXkpOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEltYWdlVmlld2VyRGlhbG9nLCB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCArICdweCcsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgZGF0YTogeyB1cmw6IHRoaXMudXJsIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUoKHJlc3VsdCkgPT4ge30pO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZmV0Y2hFdmVudHMoKSB7XHJcbiAgICAvLyB0aGlzLmNvbmZpZy5kZXZpY2UuaWRcclxuICAgIC8vIDE2NDRcclxuICAgIC8vMjExXHJcbiAgICB0aGlzLmV2ZW50cy5saXN0QnlTb3VyY2UkKFxyXG4gICAgICB0aGlzLmNvbmZpZy5kZXZpY2UuaWQsXHJcbiAgICAgICAgeyBwYWdlU2l6ZTogMjAwMCxcclxuICAgICAgICAgIHR5cGU6IHRoaXMuY29uZmlnLmV2ZW50VHlwZSB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhvdDogdHJ1ZSxcclxuICAgICAgICAgIHJlYWx0aW1lOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVhbHRpbWVTdGF0ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmV2YW50RGF0YSA9IFsuLi5kYXRhXTtcclxuICAgICAgICAgIHRoaXMuZXZhbnREYXRhLnNvcnQoKGEsIGIpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIGEuY3JlYXRpb25UaW1lICE9PSB1bmRlZmluZWQgJiYgYi5jcmVhdGlvblRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBhLmNyZWF0aW9uVGltZSA+IGIuY3JlYXRpb25UaW1lXHJcbiAgICAgICAgICAgICAgPyAtMVxyXG4gICAgICAgICAgICAgIDogYS5jcmVhdGlvblRpbWUgPCBiLmNyZWF0aW9uVGltZVxyXG4gICAgICAgICAgICAgID8gMVxyXG4gICAgICAgICAgICAgIDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YSA9IHRoaXMuZXZhbnREYXRhO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmxvYWRJbWFnZSgpLCAyMDAwKTtcclxuICAgICAgICAvLyAgdGhpcy5sb2FkSW1hZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnJlYWx0aW1lU3RhdGUgPSAhdGhpcy5yZWFsdGltZVN0YXRlO1xyXG4gICAgaWYgKHRoaXMucmVhbHRpbWVTdGF0ZSkge1xyXG4gICAgICB0aGlzLmZldGNoRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdGVwcGVyc2VsZWN0ZWN0ZWQoZXZlbnQpIHtcclxuICAgIHRoaXMudXJsID0gJyc7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBldmVudC5zZWxlY3RlZEluZGV4O1xyXG4gICAgdGhpcy5sb2FkSW1hZ2UoKTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdpbWFnZS12aWV3ZXItZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogJ2ltYWdlLXZpZXdlci1kaWFsb2cuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2ltYWdlLXZpZXdlci1kaWFsb2cuY3NzJ10sXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LWNsYXNzLXN1ZmZpeFxyXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJEaWFsb2cge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlVmlld2VyRGlhbG9nPixcclxuICAgIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyLFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhXHJcbiAgKSB7fVxyXG5cclxuICBvbk5vQ2xpY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=