import { Subject } from 'rxjs';
import { __awaiter } from 'tslib';
import { Config, S3 } from 'aws-sdk';
import { EventService } from '@c8y/client';
import { DomSanitizer } from '@angular/platform-browser';
import { HOOK_COMPONENT, CoreModule } from '@c8y/ngx-components';
import { Injectable, Component, ViewChild, ViewEncapsulation, Inject, Input, NgModule } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatStepperModule, MatExpansionModule, MatCardModule, MatDialogModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    }
    /**
     * @param {?} url
     * @return {?}
     */
    fetchImageFronMaseUrl(url) {
        return this.http
            .get(url);
        // .subscribe(res => {
        //   this.imgSrc = res['encodedString'];
        //   console.log('========Image Response==========');
        //   console.log(this.imgSrc);
        //   this.urlChanged.next(this.imgSrc);
        // });
        //         console.log('========Outside Subscribe==========');
        //         console.log(this.imgSrc);
        //         return this.imgSrc;
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
                const awsConfig = new Config({
                    accessKeyId: this.config.accessKeyId,
                    // "AKIAV6J42ZLEEBLX23IJ",
                    secretAccessKey: this.config.secretAccessKey,
                    // "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",
                    signatureVersion: this.config.signatureVersion,
                    // "v4",
                    region: this.config.region // "eu-central-1"
                });
                /** @type {?} */
                const s3 = new S3(awsConfig);
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        this.config.imgSrcType = "baseUrl";
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
                template: "<div class=\"form-group\">\r\n    <c8y-form-group>\r\n        <div class=\"container-configimageviwer\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Width</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.width\" style=\"width:100%\" [(ngModel)]=\"config.width\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Height</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.height\" style=\"width:100%\" [(ngModel)]=\"config.height\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"config.imgSrcType\">\r\n            <mat-radio-button value=\"baseUrl\"  >Base URL</mat-radio-button>\r\n            <mat-radio-button value=\"s3key\">S3 Key</mat-radio-button>\r\n          </mat-radio-group>\r\n          <div class=\"form-group\" *ngIf=\"config.imgSrcType == 'baseUrl' \" >\r\n            <label translate>Base URL</label>\r\n            <input class=\"form-control\" type=\"text\" name=\"config.baseUrl\" style=\"width:100%\" [(ngModel)]=\"config.baseUrl\">\r\n        </div>  \r\n        <div class=\"container-configimageviwer\" *ngIf=\"config.imgSrcType == 's3key'\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>AccessKey ID</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.accessKeyId\" style=\"width:100%\" [(ngModel)]=\"config.accessKeyId\">\r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label translate>Secret AcessKey</label>\r\n                    <input class=\"form-control\" class=\"form-control\" type=\"password\" name=\"config.secretAccessKey\" style=\"width:100%\" [(ngModel)]=\"config.secretAccessKey\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Signature Version</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.signatureVersion\" style=\"width:100%\" [(ngModel)]=\"config.signatureVersion\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Region</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.region\" style=\"width:100%\" [(ngModel)]=\"config.region\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Bucket</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.bucket\" style=\"width:100%\" [(ngModel)]=\"config.bucket\">\r\n                </div>\r\n                \r\n            </div>\r\n          </div>\r\n\r\n    \r\n\r\n\r\n    </c8y-form-group>\r\n</div>",
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
    label: 'S3 Image Viewer',
    description: 'S3 Image Viewer',
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
                declarations: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent, ImageViewerDialog],
                imports: [
                    CoreModule,
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
                    HttpClientModule
                ],
                exports: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent],
                entryComponents: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent, ImageViewerDialog],
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

export { GpS3ImageViewerService, GpS3ImageViewerComponent, ImageViewerDialog, GpS3ImageViewerModule, GpS3ImageViewerConfigComponent as ɵa };

//# sourceMappingURL=gp-s3-image-viewer.js.map