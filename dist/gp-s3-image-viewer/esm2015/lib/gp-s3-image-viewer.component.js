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
export class GpS3ImageViewerComponent {
    /**
     * @param {?} dialog
     * @param {?} events
     * @param {?} imageViewrService
     * @param {?} _DomSanitizationService
     */
    constructor(dialog, events, imageViewrService, _DomSanitizationService) {
        // this.url = this.getImage(1);
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
        (key) => {
            console.log('====get Image====');
            console.log(key);
            if (this.config !== undefined) {
                // const hash = SHA256('oas/j58jffQRWlHzBeqLJLrfA7NTGRnp1c8vsBJK').toString(enc.Base64);
                // console.log("============Hash Code=====");
                // console.log(hash);
                /** @type {?} */
                const awsConfig = new AWS.Config({
                    accessKeyId: this.config.accessKeyId,
                    // "AKIAV6J42ZLEEBLX23IJ",
                    secretAccessKey: this.config.secretAccessKey,
                    // "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",
                    signatureVersion: this.config.signatureVersion,
                    // "v4",
                    region: this.config.region // "eu-central-1"
                });
                /** @type {?} */
                const s3 = new AWS.S3(awsConfig);
                /** @type {?} */
                const url = s3.getSignedUrl('getObject', {
                    Bucket: this.config.bucket,
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
    ngOnInit() {
        this.fetchEvents();
        if (this.config.imgSrcType === 'baseUrl') {
            console.log("Base URL" + this.config.baseUrl);
            this.fetchImg(this.config.baseUrl + this.evantData[0].text);
        }
        else {
            this.url = this.getImage(this.evantData[0].text);
        }
    }
    /**
     * @return {?}
     */
    refresh() {
        this.fetchEvents();
        this.url = '';
        if (this.config.imgSrcType === 'baseUrl') {
            console.log("Base URL" + this.config.baseUrl);
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
        }
        else {
            this.url = this.getImage(this.evantData[this.selectedIndex].text);
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchImg(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log("===+ URL=====");
            console.log(url);
            /** @type {?} */
            let x = yield this.imageViewrService.fetchImageFronMaseUrl(url).toPromise();
            console.log(x);
            this.url = 'data:image/png;base64, ' + x['encodedString'];
        });
    }
    /**
     * @param {?} dateFrom
     * @param {?} dateTo
     * @return {?}
     */
    filter(dateFrom, dateTo) {
        // console.log(this.evantData);
        // console.log(dateFrom);
        // console.log(dateTo);
        this.evantData.filter((/**
         * @param {?} singleEvent
         * @return {?}
         */
        singleEvent => {
            console.log('Event Creation Time' + singleEvent.creationTime);
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    openDialog(key) {
        //const url = this.getImage(key);
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
            console.log('The dialog was closed');
        }));
    }
    /**
     * @return {?}
     */
    fetchEvents() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            data => {
                if (this.realtimeState) {
                    console.log('============Data===============');
                    console.log(data);
                    this.evantData = [...data];
                    this.evantData.reverse();
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
        if (this.config.imgSrcType === 'baseUrl') {
            console.log("Base URL" + this.config.baseUrl);
            this.fetchImg(this.config.baseUrl + this.evantData[this.selectedIndex].text);
        }
        else {
            this.url = this.getImage(this.evantData[this.selectedIndex].text);
        }
    }
}
GpS3ImageViewerComponent.decorators = [
    { type: Component, args: [{
                selector: "lib-gp-s3-image-viewer",
                template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div>\r\n    <!-- <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\" >\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter(fromPicker, toPicker)\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button> -->\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n <div style=\"margin-left: 60px;\">\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of evantData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0yyyy\\n HH:mm'}}</label>    {{event.type}} </ng-template>\r\n    \r\n        <div class=\"details-div\">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Image Type</dt>\r\n                <dd>{{event.type}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" class=\"stepper-img\" (click)=\"openDialog(event.text)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                encapsulation: ViewEncapsulation.None,
                styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px}dt{font-weight:700;color:#677680;line-height:1.428;display:inline}dd{color:#677680;line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:22px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;font-size:10px;width:60px;white-space:initial}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBRVQsU0FBUyxFQUNULGlCQUFpQixFQUNqQixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sS0FBSyxHQUFHLE1BQU0sU0FBUyxDQUFDO0FBQy9CLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULGVBQWUsRUFDZixZQUFZLEVBQ2IsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUV6RCxnQ0FFQzs7O0lBREMseUJBQVk7O0FBUWQsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7OztJQUNuQyxZQUFtQixNQUFpQixFQUFTLE1BQW9CLEVBQVMsaUJBQXlDLEVBQVMsdUJBQXFDO1FBRWhLLCtCQUErQjtRQUZiLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQVMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUFTLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBYztRQVFqSyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLFFBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUNsQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBb0ZmLGFBQVE7Ozs7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Ozs7WUE1SUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLCsyR0FBd0M7Z0JBRXhDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7OztZQWhCQyxTQUFTO1lBS0YsWUFBWTtZQURaLHNCQUFzQjtZQUV0QixZQUFZOzs7cUJBbUJsQixLQUFLO3NCQVFMLFNBQVMsU0FBQyxTQUFTOzs7O0lBUnBCLDBDQUFnQjs7SUFDaEIsNENBQWlCOztJQUNqQixrREFBdUI7O0lBQ3ZCLHVDQUFTOztJQUNULGlEQUFrQjs7SUFDbEIsaURBQXFCOztJQUNyQiw2Q0FBZTs7SUFFZiwyQ0FBMEM7O0lBa0YxQyw0Q0F5QkM7O0lBMUhXLDBDQUF3Qjs7SUFBRSwwQ0FBMkI7O0lBQUUscURBQWdEOztJQUFFLDJEQUE0Qzs7QUE2SW5LLE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixZQUNTLFNBQTBDLEVBQVMsdUJBQXFDLEVBQy9ELElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQWlDO1FBQVMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUFjO1FBQy9ELFNBQUksR0FBSixJQUFJLENBQVk7SUFDL0MsQ0FBQzs7OztJQUVKLFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQix3SUFBdUM7O2FBRXhDOzs7O1lBNUpDLFlBQVk7WUFJTCxZQUFZOzRDQTRKaEIsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsc0NBQWlEOztJQUFFLG9EQUE0Qzs7SUFDL0YsaUNBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb24sXHJcbiAgSW5qZWN0LFxyXG4gIElucHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBBV1MgZnJvbSAnYXdzLXNkayc7XHJcbmltcG9ydCB7XHJcbiAgTWF0U3RlcHBlcixcclxuICBNYXREaWFsb2csXHJcbiAgTUFUX0RJQUxPR19EQVRBLFxyXG4gIE1hdERpYWxvZ1JlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyU2VydmljZSB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICdAYzh5L2NsaWVudCc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vLyBpbXBvcnQgeyBTSEEyNTYsIGVuYyB9IGZyb20gXCJjcnlwdG8tanNcIjtcclxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcclxuICB1cmw6IHN0cmluZztcclxufVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJsaWItZ3AtczMtaW1hZ2Utdmlld2VyXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncC1zMy1pbWFnZS12aWV3ZXIuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ncC1zMy1pbWFnZS12aWV3ZXIuY3NzXCJdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEdwUzNJbWFnZVZpZXdlckNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nLCBwdWJsaWMgZXZlbnRzOiBFdmVudFNlcnZpY2UsIHB1YmxpYyBpbWFnZVZpZXdyU2VydmljZTogR3BTM0ltYWdlVmlld2VyU2VydmljZSwgcHVibGljIF9Eb21TYW5pdGl6YXRpb25TZXJ2aWNlOiBEb21TYW5pdGl6ZXIgKSB7XHJcblxyXG4gICAvLyB0aGlzLnVybCA9IHRoaXMuZ2V0SW1hZ2UoMSk7XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coXCJEZXZpY2UgSWRcIisgdGhpcy5jb25maWcuZGV2aWNlLmlkKVxyXG4gIH1cclxuXHJcbiAgQElucHV0KCkgY29uZmlnO1xyXG4gIGlzTGluZWFyID0gZmFsc2U7XHJcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcclxuICB1cmwgPSAnJztcclxuICBzZWxlY3RlZEluZGV4ID0gMDtcclxuICByZWFsdGltZVN0YXRlID0gdHJ1ZTtcclxuICBldmFudERhdGEgPSBbXTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc3RlcHBlcicpIHN0ZXBwZXI6IE1hdFN0ZXBwZXI7XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5mZXRjaEV2ZW50cygpO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkJhc2UgVVJMXCIrIHRoaXMuY29uZmlnLmJhc2VVcmwpO1xyXG4gICAgICB0aGlzLmZldGNoSW1nKHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmV2YW50RGF0YVswXS50ZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudXJsID0gdGhpcy5nZXRJbWFnZSh0aGlzLmV2YW50RGF0YVswXS50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIHJlZnJlc2goKXtcclxuXHJcbiAgICB0aGlzLmZldGNoRXZlbnRzKCk7XHJcbiAgICB0aGlzLnVybCA9ICcnO1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkJhc2UgVVJMXCIrIHRoaXMuY29uZmlnLmJhc2VVcmwpO1xyXG4gICAgICB0aGlzLmZldGNoSW1nKHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cmwgPSB0aGlzLmdldEltYWdlKHRoaXMuZXZhbnREYXRhW3RoaXMuc2VsZWN0ZWRJbmRleF0udGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGFzeW5jIGZldGNoSW1nKHVybCl7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCI9PT0rIFVSTD09PT09XCIpO1xyXG4gICAgY29uc29sZS5sb2codXJsKTtcclxuICAgIGxldCB4ID0gYXdhaXQgdGhpcy5pbWFnZVZpZXdyU2VydmljZS5mZXRjaEltYWdlRnJvbk1hc2VVcmwodXJsKS50b1Byb21pc2UoKTsgXHJcbiAgICBjb25zb2xlLmxvZyh4KVxyXG4gICAgdGhpcy51cmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCAnICsgeFsnZW5jb2RlZFN0cmluZyddO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIGZpbHRlcihkYXRlRnJvbSwgZGF0ZVRvKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmV2YW50RGF0YSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlRnJvbSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRlVG8pO1xyXG5cclxuICAgIHRoaXMuZXZhbnREYXRhLmZpbHRlcihzaW5nbGVFdmVudCA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFdmVudCBDcmVhdGlvbiBUaW1lJyArIHNpbmdsZUV2ZW50LmNyZWF0aW9uVGltZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb3BlbkRpYWxvZyhrZXkpOiB2b2lkIHtcclxuXHJcbiAgICAvL2NvbnN0IHVybCA9IHRoaXMuZ2V0SW1hZ2Uoa2V5KTtcclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oSW1hZ2VWaWV3ZXJEaWFsb2csIHtcclxuICAgICAgd2lkdGg6IHRoaXMuY29uZmlnLndpZHRoICsgJ3B4JyxcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgKyAncHgnICxcclxuICAgICAgZGF0YTogeyB1cmw6IHRoaXMudXJsIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGZldGNoRXZlbnRzKCkge1xyXG4gICAgY29uc29sZS5sb2coJz09PT09PT09PT1Db25maWc9PT09PT09PScpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5jb25maWcpO1xyXG4gICAgLy8gdGhpcy5jb25maWcuZGV2aWNlLmlkXHJcbiAgICB0aGlzLmV2ZW50c1xyXG4gICAgICAubGlzdEJ5U291cmNlJCh0aGlzLmNvbmZpZy5kZXZpY2UuaWQgLHsgcGFnZVNpemU6IDIwMDAgfSwge1xyXG4gICAgICAgIGhvdDogdHJ1ZSxcclxuICAgICAgICByZWFsdGltZTogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnJlYWx0aW1lU3RhdGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT1EYXRhPT09PT09PT09PT09PT09Jyk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIHRoaXMuZXZhbnREYXRhID0gWy4uLmRhdGFdO1xyXG4gICAgICAgICAgdGhpcy5ldmFudERhdGEucmV2ZXJzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gIH1cclxuICB0b2dnbGUoKSB7XHJcbiAgICB0aGlzLnJlYWx0aW1lU3RhdGUgPSAhdGhpcy5yZWFsdGltZVN0YXRlO1xyXG4gICAgaWYgKHRoaXMucmVhbHRpbWVTdGF0ZSkge1xyXG4gICAgICB0aGlzLmZldGNoRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGdldEltYWdlID0gKGtleSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCc9PT09Z2V0IEltYWdlPT09PScpO1xyXG4gIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICBpZiAodGhpcy5jb25maWcgIT09IHVuZGVmaW5lZCkge1xyXG5cclxuICAgICAgLy8gY29uc3QgaGFzaCA9IFNIQTI1Nignb2FzL2o1OGpmZlFSV2xIekJlcUxKTHJmQTdOVEdSbnAxYzh2c0JKSycpLnRvU3RyaW5nKGVuYy5CYXNlNjQpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PUhhc2ggQ29kZT09PT09XCIpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhoYXNoKTtcclxuXHJcbiAgICAgIGNvbnN0IGF3c0NvbmZpZyA9IG5ldyBBV1MuQ29uZmlnKHtcclxuICAgICAgICBhY2Nlc3NLZXlJZDogdGhpcy5jb25maWcuYWNjZXNzS2V5SWQsIC8vIFwiQUtJQVY2SjQyWkxFRUJMWDIzSUpcIixcclxuICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHRoaXMuY29uZmlnLnNlY3JldEFjY2Vzc0tleSwgLy8gXCJvYXMvajU4amZmUVJXbEh6QmVxTEpMcmZBN05UR1JucDFjOHZzQkpLXCIsXHJcbiAgICAgICAgc2lnbmF0dXJlVmVyc2lvbjogdGhpcy5jb25maWcuc2lnbmF0dXJlVmVyc2lvbiwgLy8gXCJ2NFwiLFxyXG4gICAgICAgIHJlZ2lvbjogdGhpcy5jb25maWcucmVnaW9uIC8vIFwiZXUtY2VudHJhbC0xXCJcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnN0IHMzID0gbmV3IEFXUy5TMyhhd3NDb25maWcpO1xyXG5cclxuICAgICAgY29uc3QgdXJsID0gczMuZ2V0U2lnbmVkVXJsKCdnZXRPYmplY3QnLCB7XHJcbiAgICAgICAgQnVja2V0OiB0aGlzLmNvbmZpZy5idWNrZXQsIC8vIFwic2FnLWdsb2JhbC1wcmVzYWxlc1wiLFxyXG4gICAgICAgIEtleToga2V5ICsgJydcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuICBzdGVwcGVyc2VsZWN0ZWN0ZWQoZXZlbnQpIHtcclxuICAgIHRoaXMudXJsID0gJyc7XHJcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBldmVudC5zZWxlY3RlZEluZGV4O1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmltZ1NyY1R5cGUgPT09ICdiYXNlVXJsJykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkJhc2UgVVJMXCIrIHRoaXMuY29uZmlnLmJhc2VVcmwpO1xyXG4gICAgICB0aGlzLmZldGNoSW1nKHRoaXMuY29uZmlnLmJhc2VVcmwgKyB0aGlzLmV2YW50RGF0YVt0aGlzLnNlbGVjdGVkSW5kZXhdLnRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy51cmwgPSB0aGlzLmdldEltYWdlKHRoaXMuZXZhbnREYXRhW3RoaXMuc2VsZWN0ZWRJbmRleF0udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpbWFnZS12aWV3ZXItZGlhbG9nJyxcclxuICB0ZW1wbGF0ZVVybDogXCJpbWFnZS12aWV3ZXItZGlhbG9nLmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcImltYWdlLXZpZXdlci1kaWFsb2cuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckRpYWxvZyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VWaWV3ZXJEaWFsb2c+LCBwdWJsaWMgX0RvbVNhbml0aXphdGlvblNlcnZpY2U6IERvbVNhbml0aXplcixcclxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YVxyXG4gICkge31cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcbn1cclxuIl19