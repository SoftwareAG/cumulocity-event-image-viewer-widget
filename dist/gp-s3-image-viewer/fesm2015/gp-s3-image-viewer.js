import { Subject } from 'rxjs';
import { Config, S3 } from 'aws-sdk';
import { EventService } from '@c8y/client';
import { __awaiter } from 'tslib';
import { DomSanitizer } from '@angular/platform-browser';
import { HOOK_COMPONENT, CoreModule } from '@c8y/ngx-components';
import { Injectable, Component, Inject, ViewChild, ViewEncapsulation, Input, NgModule } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatStepperModule, MatExpansionModule, MatCardModule, MatDialogModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatRadioModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GpS3ImageViewerService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.urlChanged = new Subject();
        this.imgSrc = '';
        this.getImage = (/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (this.s3 !== undefined) {
                /** @type {?} */
                const url = this.s3.getSignedUrl('getObject', {
                    Bucket: this.config.bucket,
                    // "sag-global-presales",
                    Key: key + '',
                });
                return url;
            }
            return '';
        });
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchImageFromBaseUrl(url) {
        return this.http.get(url);
    }
    /**
     * @param {?} config
     * @return {?}
     */
    fetchS3(config) {
        this.config = config;
        if (config !== undefined) {
            /** @type {?} */
            const awsConfig = new Config({
                accessKeyId: config.accessKeyId,
                secretAccessKey: config.secretAccessKey,
                signatureVersion: config.signatureVersion,
                region: config.region,
            });
            this.s3 = new S3(awsConfig);
        }
    }
}
GpS3ImageViewerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GpS3ImageViewerService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-default-image.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: max-line-length
/** @type {?} */
const defaultImage = '/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAeAAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Njk3NTM4MjgyNTc0MTFFNUFERjhERUU3OEZEN0ZERTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Njk3NTM4MjkyNTc0MTFFNUFERjhERUU3OEZEN0ZERTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OTc1MzgyNjI1NzQxMUU1QURGOERFRTc4RkQ3RkRFMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OTc1MzgyNzI1NzQxMUU1QURGOERFRTc4RkQ3RkRFMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAU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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/carousel-image-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable-next-line: component-class-suffix
class CarouselImageViewer {
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
        this.url = 'data:image/png;base64, ' + defaultImage;
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
        return __awaiter(this, void 0, void 0, function* () {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GpS3ImageViewerComponent {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        this.url = 'data:image/png;base64, ' + defaultImage;
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
// tslint:disable-next-line: component-class-suffix
class ImageViewerDialog {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer-config/gp-s3-image-viewer-config.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GpS3ImageViewerConfigComponent {
    constructor() {
        this.config = {};
        this.config.imgSrcType = 'baseUrl';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GpS3ImageViewerConfigComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gp-s3-image-viewer-config',
                template: "<div class=\"form-group\">\r\n    <c8y-form-group>\r\n        <div class=\"container-configimageviwer\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Width</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.width\" style=\"width:100%\" [(ngModel)]=\"config.width\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Height</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.height\" style=\"width:100%\" [(ngModel)]=\"config.height\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label translate>Event Type</label>\r\n            <input class=\"form-control\" type=\"text\" name=\"config.eventType\" [(ngModel)]=\"config.eventType\" />\r\n        </div>\r\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"config.imgSrcType\">\r\n            <mat-radio-button value=\"baseUrl\"  >Base URL</mat-radio-button>\r\n            <mat-radio-button value=\"s3key\">S3 Key</mat-radio-button>\r\n          </mat-radio-group>\r\n          <div class=\"form-group\" *ngIf=\"config.imgSrcType == 'baseUrl' \" >\r\n            <label translate>Base URL</label>\r\n            <input class=\"form-control\" type=\"text\" name=\"config.baseUrl\" style=\"width:100%\" [(ngModel)]=\"config.baseUrl\">\r\n        </div>  \r\n        <div class=\"container-configimageviwer\" *ngIf=\"config.imgSrcType == 's3key'\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>AccessKey ID</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.accessKeyId\" style=\"width:100%\" [(ngModel)]=\"config.accessKeyId\">\r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label translate>Secret AcessKey</label>\r\n                    <input class=\"form-control\" class=\"form-control\" type=\"password\" name=\"config.secretAccessKey\" style=\"width:100%\" [(ngModel)]=\"config.secretAccessKey\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Signature Version</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.signatureVersion\" style=\"width:100%\" [(ngModel)]=\"config.signatureVersion\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Region</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.region\" style=\"width:100%\" [(ngModel)]=\"config.region\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Bucket</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.bucket\" style=\"width:100%\" [(ngModel)]=\"config.bucket\">\r\n                </div>\r\n                \r\n            </div>\r\n          </div>\r\n\r\n    \r\n\r\n\r\n    </c8y-form-group>\r\n</div>",
                styles: [".container-configimageviwer{display:flex}.child-configimageviwer{flex-grow:1;margin:5px}"]
            }] }
];
/** @nocollapse */
GpS3ImageViewerConfigComponent.ctorParameters = () => [];
GpS3ImageViewerConfigComponent.propDecorators = {
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {
    id: 's3-image-viewer-widget',
    label: 'Event Image Viewer',
    description: 'Event Image Viewer',
    component: GpS3ImageViewerComponent,
    configComponent: GpS3ImageViewerConfigComponent,
    data: {
        ng1: {
            options: {
                noDeviceTarget: false,
                noNewWidgets: false,
                deviceTargetNotRequired: false,
                groupsSelectable: true
            }
        }
    }
};
class GpS3ImageViewerModule {
}
GpS3ImageViewerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent, ImageViewerDialog, CarouselImageViewer],
                imports: [
                    CoreModule,
                    ReactiveFormsModule,
                    MatStepperModule,
                    MatFormFieldModule,
                    BrowserAnimationsModule,
                    MatIconModule,
                    MatExpansionModule,
                    MatCardModule,
                    MatDialogModule,
                    MatTooltipModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatInputModule,
                    MatButtonModule,
                    MatRadioModule,
                    HttpClientModule,
                    CarouselModule.forRoot()
                ],
                exports: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent],
                entryComponents: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent, ImageViewerDialog, CarouselImageViewer],
                providers: [
                    GpS3ImageViewerService,
                    {
                        provide: HOOK_COMPONENT,
                        multi: true,
                        useValue: ɵ0
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: gp-s3-image-viewer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GpS3ImageViewerService, GpS3ImageViewerComponent, ImageViewerDialog, GpS3ImageViewerModule, CarouselImageViewer as ɵb, GpS3ImageViewerConfigComponent as ɵa };

//# sourceMappingURL=gp-s3-image-viewer.js.map