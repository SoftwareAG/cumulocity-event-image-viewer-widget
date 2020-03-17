/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ViewChild, ViewEncapsulation, Inject, Input, } from '@angular/core';
import * as AWS from 'aws-sdk';
import { MatStepper, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { EventService } from '@c8y/client';
import { DomSanitizer } from '@angular/platform-browser';
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
        // this.url = this.getImage(1);
        var _this = this;
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
        this.getImage = (/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            console.log('====get Image====');
            console.log(key);
            if (_this.config !== undefined) {
                // const hash = SHA256('oas/j58jffQRWlHzBeqLJLrfA7NTGRnp1c8vsBJK').toString(enc.Base64);
                // console.log("============Hash Code=====");
                // console.log(hash);
                /** @type {?} */
                var awsConfig = new AWS.Config({
                    accessKeyId: _this.config.accessKeyId,
                    // "AKIAV6J42ZLEEBLX23IJ",
                    secretAccessKey: _this.config.secretAccessKey,
                    // "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",
                    signatureVersion: _this.config.signatureVersion,
                    // "v4",
                    region: _this.config.region // "eu-central-1"
                });
                /** @type {?} */
                var s3 = new AWS.S3(awsConfig);
                /** @type {?} */
                var url = s3.getSignedUrl('getObject', {
                    Bucket: _this.config.bucket,
                    // "sag-global-presales",
                    Key: key + ''
                });
                return url;
            }
            return '';
        });
        // console.log("Device Id"+ this.config.device.id)
    }
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.fetchEvents();
        if (this.config.imgSrcType === 'baseUrl') {
            console.log("Base URL" + this.config.baseUrl);
            this.fetchImg(this.config.baseUrl + this.evantData[0].text);
        }
        else {
            this.url = this.getImage(this.evantData[0].text);
        }
    };
    /**
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.refresh = /**
     * @return {?}
     */
    function () {
        this.fetchEvents();
        this.url = '';
        if (this.config.imgSrcType === 'baseUrl') {
            console.log("Base URL" + this.config.baseUrl);
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
        }
        else {
            this.url = this.getImage(this.evantData[this.selectedIndex].text);
        }
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
                    case 0:
                        console.log("===+ URL=====");
                        console.log(url);
                        return [4 /*yield*/, this.imageViewrService.fetchImageFronMaseUrl(url).toPromise()];
                    case 1:
                        x = _a.sent();
                        console.log(x);
                        this.url = 'data:image/png;base64, ' + x['encodedString'];
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {?} dateFrom
     * @param {?} dateTo
     * @return {?}
     */
    GpS3ImageViewerComponent.prototype.filter = /**
     * @param {?} dateFrom
     * @param {?} dateTo
     * @return {?}
     */
    function (dateFrom, dateTo) {
        // console.log(this.evantData);
        // console.log(dateFrom);
        // console.log(dateTo);
        this.evantData.filter((/**
         * @param {?} singleEvent
         * @return {?}
         */
        function (singleEvent) {
            console.log('Event Creation Time' + singleEvent.creationTime);
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
        //const url = this.getImage(key);
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
            console.log('The dialog was closed');
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
                console.log('==========Config========');
                console.log(this.config);
                // this.config.device.id
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
                        console.log('============Data===============');
                        console.log(data);
                        _this.evantData = tslib_1.__spread(data);
                        _this.evantData.reverse();
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
        if (this.config.imgSrcType === 'baseUrl') {
            console.log("Base URL" + this.config.baseUrl);
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
        }
        else {
            this.url = this.getImage(this.evantData[this.selectedIndex].text);
        }
    };
    GpS3ImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: "lib-gp-s3-image-viewer",
                    template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div>\r\n    <!-- <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\" >\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter(fromPicker, toPicker)\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button> -->\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n <div style=\"margin-left: 60px;\">\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of evantData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0yyyy\\n HH:mm'}}</label>    {{event.type}} </ng-template>\r\n    \r\n        <div class=\"details-div\">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Image Type</dt>\r\n                <dd>{{event.type}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" class=\"stepper-img\" (click)=\"openDialog(event.text)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px}dt{font-weight:700;color:#677680;line-height:1.428;display:inline}dd{color:#677680;line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:22px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;font-size:10px;width:60px;white-space:initial}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}"]
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
    GpS3ImageViewerComponent.prototype.stepper;
    /** @type {?} */
    GpS3ImageViewerComponent.prototype.getImage;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBQy9CLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUV6RCxnQ0FFQzs7O0lBREMseUJBQVk7O0FBRWQ7SUFPRSxrQ0FBbUIsTUFBaUIsRUFBUyxNQUFvQixFQUFTLGlCQUF5QyxFQUFTLHVCQUFxQztRQUVoSywrQkFBK0I7UUFGaEMsaUJBS0M7UUFMa0IsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUFTLFdBQU0sR0FBTixNQUFNLENBQWM7UUFBUyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQXdCO1FBQVMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBUWpLLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsUUFBRyxHQUFHLEVBQUUsQ0FBQztRQUNULGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFvRmYsYUFBUTs7OztRQUFHLFVBQUMs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IENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG4gIEluamVjdCxcclxuICBJbnB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICogYXMgQVdTIGZyb20gJ2F3cy1zZGsnO1xyXG5pbXBvcnQge1xyXG4gIE1hdFN0ZXBwZXIsXHJcbiAgTWF0RGlhbG9nLFxyXG4gIE1BVF9ESUFMT0dfREFUQSxcclxuICBNYXREaWFsb2dSZWZcclxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnQGM4eS9jbGllbnQnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuLy8gaW1wb3J0IHsgU0hBMjU2LCBlbmMgfSBmcm9tIFwiY3J5cHRvLWpzXCI7XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGliLWdwLXMzLWltYWdlLXZpZXdlclwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vZ3AtczMtaW1hZ2Utdmlld2VyLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vZ3AtczMtaW1hZ2Utdmlld2VyLmNzc1wiXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZywgcHVibGljIGV2ZW50czogRXZlbnRTZXJ2aWNlLCBwdWJsaWMgaW1hZ2VWaWV3clNlcnZpY2U6IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UsIHB1YmxpYyBfRG9tU2FuaXRpemF0aW9uU2VydmljZTogRG9tU2FuaXRpemVyICkge1xyXG5cclxuICAgLy8gdGhpcy51cmwgPSB0aGlzLmdldEltYWdlKDEpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKFwiRGV2aWNlIElkXCIrIHRoaXMuY29uZmlnLmRldmljZS5pZClcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZztcclxuICBpc0xpbmVhciA9IGZhbHNlO1xyXG4gIHBhbmVsT3BlblN0YXRlID0gZmFsc2U7XHJcbiAgdXJsID0gJyc7XHJcbiAgc2VsZWN0ZWRJbmRleCA9IDA7XHJcbiAgcmVhbHRpbWVTdGF0ZSA9IHRydWU7XHJcbiAgZXZhbnREYXRhID0gW107XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3N0ZXBwZXInKSBzdGVwcGVyOiBNYXRTdGVwcGVyO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZmV0Y2hFdmVudHMoKTtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID09PSAnYmFzZVVybCcpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJCYXNlIFVSTFwiKyB0aGlzLmNvbmZpZy5iYXNlVXJsKTtcclxuICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLmNvbmZpZy5iYXNlVXJsICsgdGhpcy5ldmFudERhdGFbMF0udGV4dCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnVybCA9IHRoaXMuZ2V0SW1hZ2UodGhpcy5ldmFudERhdGFbMF0udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICByZWZyZXNoKCl7XHJcblxyXG4gICAgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gICAgdGhpcy51cmwgPSAnJztcclxuICAgIGlmICh0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID09PSAnYmFzZVVybCcpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJCYXNlIFVSTFwiKyB0aGlzLmNvbmZpZy5iYXNlVXJsKTtcclxuICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLmNvbmZpZy5iYXNlVXJsICsgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS50ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXJsID0gdGhpcy5nZXRJbWFnZSh0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuICBhc3luYyBmZXRjaEltZyh1cmwpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiPT09KyBVUkw9PT09PVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHVybCk7XHJcbiAgICBsZXQgeCA9IGF3YWl0IHRoaXMuaW1hZ2VWaWV3clNlcnZpY2UuZmV0Y2hJbWFnZUZyb25NYXNlVXJsKHVybCkudG9Qcm9taXNlKCk7IFxyXG4gICAgY29uc29sZS5sb2coeClcclxuICAgIHRoaXMudXJsID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwgJyArIHhbJ2VuY29kZWRTdHJpbmcnXTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBmaWx0ZXIoZGF0ZUZyb20sIGRhdGVUbykge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ldmFudERhdGEpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZUZyb20pO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0ZVRvKTtcclxuXHJcbiAgICB0aGlzLmV2YW50RGF0YS5maWx0ZXIoc2luZ2xlRXZlbnQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnRXZlbnQgQ3JlYXRpb24gVGltZScgKyBzaW5nbGVFdmVudC5jcmVhdGlvblRpbWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9wZW5EaWFsb2coa2V5KTogdm9pZCB7XHJcblxyXG4gICAgLy9jb25zdCB1cmwgPSB0aGlzLmdldEltYWdlKGtleSk7XHJcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEltYWdlVmlld2VyRGlhbG9nLCB7XHJcbiAgICAgIHdpZHRoOiB0aGlzLmNvbmZpZy53aWR0aCArICdweCcsXHJcbiAgICAgIGhlaWdodDogdGhpcy5jb25maWcuaGVpZ2h0ICsgJ3B4JyAsXHJcbiAgICAgIGRhdGE6IHsgdXJsOiB0aGlzLnVybCB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmZXRjaEV2ZW50cygpIHtcclxuICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09Q29uZmlnPT09PT09PT0nKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29uZmlnKTtcclxuICAgIC8vIHRoaXMuY29uZmlnLmRldmljZS5pZFxyXG4gICAgdGhpcy5ldmVudHNcclxuICAgICAgLmxpc3RCeVNvdXJjZSQodGhpcy5jb25maWcuZGV2aWNlLmlkICx7IHBhZ2VTaXplOiAyMDAwIH0sIHtcclxuICAgICAgICBob3Q6IHRydWUsXHJcbiAgICAgICAgcmVhbHRpbWU6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICBpZiAodGhpcy5yZWFsdGltZVN0YXRlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT09PT09RGF0YT09PT09PT09PT09PT09PScpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICB0aGlzLmV2YW50RGF0YSA9IFsuLi5kYXRhXTtcclxuICAgICAgICAgIHRoaXMuZXZhbnREYXRhLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICB9XHJcbiAgdG9nZ2xlKCkge1xyXG4gICAgdGhpcy5yZWFsdGltZVN0YXRlID0gIXRoaXMucmVhbHRpbWVTdGF0ZTtcclxuICAgIGlmICh0aGlzLnJlYWx0aW1lU3RhdGUpIHtcclxuICAgICAgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRJbWFnZSA9IChrZXkpID0+IHtcclxuICBjb25zb2xlLmxvZygnPT09PWdldCBJbWFnZT09PT0nKTtcclxuICBjb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgIC8vIGNvbnN0IGhhc2ggPSBTSEEyNTYoJ29hcy9qNThqZmZRUldsSHpCZXFMSkxyZkE3TlRHUm5wMWM4dnNCSksnKS50b1N0cmluZyhlbmMuQmFzZTY0KTtcclxuICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT09PT1IYXNoIENvZGU9PT09PVwiKTtcclxuICAgICAgLy8gY29uc29sZS5sb2coaGFzaCk7XHJcblxyXG4gICAgICBjb25zdCBhd3NDb25maWcgPSBuZXcgQVdTLkNvbmZpZyh7XHJcbiAgICAgICAgYWNjZXNzS2V5SWQ6IHRoaXMuY29uZmlnLmFjY2Vzc0tleUlkLCAvLyBcIkFLSUFWNko0MlpMRUVCTFgyM0lKXCIsXHJcbiAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiB0aGlzLmNvbmZpZy5zZWNyZXRBY2Nlc3NLZXksIC8vIFwib2FzL2o1OGpmZlFSV2xIekJlcUxKTHJmQTdOVEdSbnAxYzh2c0JKS1wiLFxyXG4gICAgICAgIHNpZ25hdHVyZVZlcnNpb246IHRoaXMuY29uZmlnLnNpZ25hdHVyZVZlcnNpb24sIC8vIFwidjRcIixcclxuICAgICAgICByZWdpb246IHRoaXMuY29uZmlnLnJlZ2lvbiAvLyBcImV1LWNlbnRyYWwtMVwiXHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zdCBzMyA9IG5ldyBBV1MuUzMoYXdzQ29uZmlnKTtcclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IHMzLmdldFNpZ25lZFVybCgnZ2V0T2JqZWN0Jywge1xyXG4gICAgICAgIEJ1Y2tldDogdGhpcy5jb25maWcuYnVja2V0LCAvLyBcInNhZy1nbG9iYWwtcHJlc2FsZXNcIixcclxuICAgICAgICBLZXk6IGtleSArICcnXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHVybDtcclxuICAgIH1cclxuICAgIHJldHVybiAnJztcclxuICB9XHJcbiAgc3RlcHBlcnNlbGVjdGVjdGVkKGV2ZW50KSB7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gZXZlbnQuc2VsZWN0ZWRJbmRleDtcclxuICAgIGlmICh0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID09PSAnYmFzZVVybCcpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJCYXNlIFVSTFwiKyB0aGlzLmNvbmZpZy5iYXNlVXJsKTtcclxuICAgICAgdGhpcy5mZXRjaEltZyh0aGlzLmNvbmZpZy5iYXNlVXJsICsgdGhpcy5ldmFudERhdGFbdGhpcy5zZWxlY3RlZEluZGV4XS50ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXJsID0gdGhpcy5nZXRJbWFnZSh0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW1hZ2Utdmlld2VyLWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6IFwiaW1hZ2Utdmlld2VyLWRpYWxvZy5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJpbWFnZS12aWV3ZXItZGlhbG9nLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJEaWFsb2cge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlVmlld2VyRGlhbG9nPiwgcHVibGljIF9Eb21TYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGFcclxuICApIHt9XHJcblxyXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==