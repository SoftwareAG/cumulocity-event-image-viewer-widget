(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('aws-sdk'), require('@c8y/client'), require('@angular/platform-browser'), require('@c8y/ngx-components'), require('@angular/core'), require('@angular/material'), require('@angular/material/form-field'), require('@angular/platform-browser/animations'), require('@angular/material/icon'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('gp-s3-image-viewer', ['exports', 'rxjs', 'aws-sdk', '@c8y/client', '@angular/platform-browser', '@c8y/ngx-components', '@angular/core', '@angular/material', '@angular/material/form-field', '@angular/platform-browser/animations', '@angular/material/icon', '@angular/common/http'], factory) :
    (factory((global['gp-s3-image-viewer'] = {}),global.rxjs,global.AWS,global.client,global.ng.platformBrowser,global.ngxComponents,global.ng.core,global.ng.material,global.ng.material['form-field'],global.ng.platformBrowser.animations,global.ng.material.icon,global.ng.common.http));
}(this, (function (exports,rxjs,AWS,client,platformBrowser,ngxComponents,core,material,formField,animations,icon,http) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gp-s3-image-viewer.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GpS3ImageViewerService = /** @class */ (function () {
        function GpS3ImageViewerService(http$$1) {
            this.http = http$$1;
            this.urlChanged = new rxjs.Subject();
            this.imgSrc = '';
        }
        /**
         * @param {?} url
         * @return {?}
         */
        GpS3ImageViewerService.prototype.fetchImageFronMaseUrl = /**
         * @param {?} url
         * @return {?}
         */
            function (url) {
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
            };
        GpS3ImageViewerService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GpS3ImageViewerService.ctorParameters = function () {
            return [
                { type: http.HttpClient }
            ];
        };
        return GpS3ImageViewerService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gp-s3-image-viewer.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            this.getImage = ( /**
             * @param {?} key
             * @return {?}
             */function (key) {
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
                return __awaiter(this, void 0, void 0, function () {
                    var x;
                    return __generator(this, function (_a) {
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
                this.evantData.filter(( /**
                 * @param {?} singleEvent
                 * @return {?}
                 */function (singleEvent) {
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
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
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
                return __awaiter(this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        console.log('==========Config========');
                        console.log(this.config);
                        // this.config.device.id
                        this.events
                            .listBySource$(this.config.device.id, { pageSize: 2000 }, {
                            hot: true,
                            realtime: true
                        })
                            .subscribe(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                            if (_this.realtimeState) {
                                console.log('============Data===============');
                                console.log(data);
                                _this.evantData = __spread(data);
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
            { type: core.Component, args: [{
                        selector: "lib-gp-s3-image-viewer",
                        template: "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\r\n      rel=\"stylesheet\">\r\n\r\n\r\n<!-- \r\n<button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n    {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n  </button> -->\r\n  <div>\r\n    <!-- <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n      <input matInput [matDatepicker]=\"fromPicker\" placeholder=\"From\" >\r\n      <mat-datepicker-toggle matSuffix [for]=\"fromPicker\"></mat-datepicker-toggle>\r\n      <mat-datepicker #fromPicker></mat-datepicker>\r\n    </mat-form-field>\r\n      <mat-form-field appearance=\"outline\" class=\"dateChooserStyling\">\r\n        <input matInput [matDatepicker]=\"toPicker\" placeholder=\"To\" >\r\n        <mat-datepicker-toggle matSuffix [for]=\"toPicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #toPicker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button type=\"button\" title=\"Filter date range\" class=\"btn btn-default \" (click)=\"filter(fromPicker, toPicker)\">\r\n      <i c8y-icon=\"filter\" class=\"fa fw fa-filter\"></i>\r\n    </button> -->\r\n    <div style =\"float: right; margin-right: 10px;\">\r\n      <button type=\"button\" class=\"btn btn-link c8y-realtime\" title=\"Toggle realtime\" (click)=\"toggle()\" >\r\n        <span [ngClass]=\"realtimeState?'c8y-pulse active' : 'c8y-pulse inactive'\" ></span>\r\n        <span >Realtime</span>\r\n      </button>\r\n      <button mat-icon-button style=\"float: right; margin-right: 10px;color:#1776BF;\" type=\"button\" class=\"button\" (click) = \"refresh()\" ><span class=\"fa fa-refresh\"></span></button>\r\n      </div>\r\n  </div>\r\n <div style=\"margin-left: 60px;\">\r\n  <mat-vertical-stepper [linear]=\"isLinear\" #stepper (selectionChange)=\"stepperselectected($event)\" [selectedIndex]=\"selectedIndex\" >\r\n    <ng-template matStepperIcon=\"edit\">\r\n      <mat-icon></mat-icon>\r\n    </ng-template>\r\n    \r\n    <mat-step  *ngFor =\"let event of evantData\">    \r\n       <ng-template matStepLabel>    <label class=\"label-time\">{{event.creationTime |\u00A0date:'d\u00A0MMMM\u00A0yyyy\\n HH:mm'}}</label>    {{event.type}} </ng-template>\r\n    \r\n        <div class=\"details-div\">\r\n          <label class=\"heading-label\">DETAILS</label>\r\n\r\n          <div class=\"container-imageviewer\">\r\n            <div class=\"child\"> \r\n           \r\n              <dl>\r\n                <dt>Time</dt>\r\n                <dd>{{event.time}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Image Type</dt>\r\n                <dd>{{event.type}}</dd>\r\n              </dl>\r\n              <dl>\r\n                <dt>Device Name</dt>\r\n                <dd>{{event.source.name}}</dd>\r\n              </dl>\r\n            </div>\r\n            <div class=\"child\">\r\n              <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(this.url)\" class=\"stepper-img\" (click)=\"openDialog(event.text)\"  matTooltip=\"Click to zoom it\">\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n\r\n       \r\n      </mat-step>\r\n      \r\n  \r\n  </mat-vertical-stepper>\r\n </div>\r\n      \r\n   \r\n    <!-- <mat-card class= \"child\" style=\"position: relative;\">\r\n        <img [src]=\"url\" class=\"imgClass\">\r\n      </mat-card> -->\r\n\r\n\r\n<br>\r\n\r\n \r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: [".event-date{margin-right:15px;width:60px;font-size:10px;line-height:1;text-align:right}.container-imageviewer{display:flex;flex-wrap:wrap;justify-content:space-around;width:inherit}.child{flex-grow:1;flex-basis:45%;margin-left:10px;margin-top:10px}.imgClass{position:absolute;top:50%;left:50%;width:300px;height:300px;transform:translate(-50%,-50%)}.details-div{border-top:1px solid #677680;position:relative;margin-top:10px}.heading-label{background-color:#fbfbfc;position:absolute;top:-10px;padding:3px;color:#677680;font-size:12px;font-weight:var(--legend-font-weight,500)}.stepper-img{width:60px;height:60px;border:1px solid #677680;margin-right:10px;border-radius:10%;box-shadow:1px 3px #888;transition:transform .2s ease-in-out;cursor:pointer}dl{font-size:85%;margin:4px}dt{font-weight:700;color:#677680;line-height:1.428;display:inline}dd{color:#677680;line-height:1.428;display:inline;margin-left:5px}.text{transform:scaleX(-1);font-size:10px}.mat-step-icon .mat-icon,.mat-step-icon-content{visibility:hidden!important}.mat-vertical-stepper-header{padding:10px!important}.mat-vertical-content-container{margin-left:22px!important;border-bottom:2px solid #f0f0f1!important;background-color:#fbfbfc}.mat-step-icon{width:12px!important;height:12px!important}.mat-vertical-content{padding:0 14px 14px 24px!important}.mat-step-header .mat-step-icon-selected,.mat-step-header .mat-step-icon-state-done,.mat-step-header .mat-step-icon-state-edit{background-color:#1776bf!important}.mat-stepper-vertical-line::before{border-left-style:dotted!important;border-left-width:2px!important}.label-time{line-height:1.428;display:inline;position:absolute;left:-60px;font-size:10px;width:60px;white-space:initial}.mat-step-header{overflow:inherit!important}.mat-form-field-appearance-outline .mat-form-field-infix{padding:0 0 .5em!important}.dateChooserStyling{margin:5px;width:150px}.mat-form-field{font-size:12px}"]
                    }] }
        ];
        /** @nocollapse */
        GpS3ImageViewerComponent.ctorParameters = function () {
            return [
                { type: material.MatDialog },
                { type: client.EventService },
                { type: GpS3ImageViewerService },
                { type: platformBrowser.DomSanitizer }
            ];
        };
        GpS3ImageViewerComponent.propDecorators = {
            config: [{ type: core.Input }],
            stepper: [{ type: core.ViewChild, args: ['stepper',] }]
        };
        return GpS3ImageViewerComponent;
    }());
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
            { type: core.Component, args: [{
                        selector: 'image-viewer-dialog',
                        template: "\r\n    <img style=\"width: 100%; height: 100%;\" [src] = \"_DomSanitizationService.bypassSecurityTrustUrl(data.url)\"/>\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ImageViewerDialog.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: platformBrowser.DomSanitizer },
                { type: undefined, decorators: [{ type: core.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return ImageViewerDialog;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gp-s3-image-viewer-config/gp-s3-image-viewer-config.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GpS3ImageViewerConfigComponent = /** @class */ (function () {
        function GpS3ImageViewerConfigComponent() {
            this.config = {};
            this.config.imgSrcType = "baseUrl";
        }
        /**
         * @return {?}
         */
        GpS3ImageViewerConfigComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        GpS3ImageViewerConfigComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-gp-s3-image-viewer-config',
                        template: "<div class=\"form-group\">\r\n    <c8y-form-group>\r\n        <div class=\"container-configimageviwer\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Width</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.width\" style=\"width:100%\" [(ngModel)]=\"config.width\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Height</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.height\" style=\"width:100%\" [(ngModel)]=\"config.height\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"config.imgSrcType\">\r\n            <mat-radio-button value=\"baseUrl\"  >Base URL</mat-radio-button>\r\n            <mat-radio-button value=\"s3key\">S3 Key</mat-radio-button>\r\n          </mat-radio-group>\r\n          <div class=\"form-group\" *ngIf=\"config.imgSrcType == 'baseUrl' \" >\r\n            <label translate>Base URL</label>\r\n            <input class=\"form-control\" type=\"text\" name=\"config.baseUrl\" style=\"width:100%\" [(ngModel)]=\"config.baseUrl\">\r\n        </div>  \r\n        <div class=\"container-configimageviwer\" *ngIf=\"config.imgSrcType == 's3key'\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>AccessKey ID</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.accessKeyId\" style=\"width:100%\" [(ngModel)]=\"config.accessKeyId\">\r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label translate>Secret AcessKey</label>\r\n                    <input class=\"form-control\" class=\"form-control\" type=\"password\" name=\"config.secretAccessKey\" style=\"width:100%\" [(ngModel)]=\"config.secretAccessKey\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Signature Version</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.signatureVersion\" style=\"width:100%\" [(ngModel)]=\"config.signatureVersion\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Region</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.region\" style=\"width:100%\" [(ngModel)]=\"config.region\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Bucket</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.bucket\" style=\"width:100%\" [(ngModel)]=\"config.bucket\">\r\n                </div>\r\n                \r\n            </div>\r\n          </div>\r\n\r\n    \r\n\r\n\r\n    </c8y-form-group>\r\n</div>",
                        styles: [".container-configimageviwer{display:flex}.child-configimageviwer{flex-grow:1;margin:5px}"]
                    }] }
        ];
        /** @nocollapse */
        GpS3ImageViewerConfigComponent.ctorParameters = function () { return []; };
        GpS3ImageViewerConfigComponent.propDecorators = {
            config: [{ type: core.Input }]
        };
        return GpS3ImageViewerConfigComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/gp-s3-image-viewer.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {
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
    var GpS3ImageViewerModule = /** @class */ (function () {
        function GpS3ImageViewerModule() {
        }
        GpS3ImageViewerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent, ImageViewerDialog],
                        imports: [
                            ngxComponents.CoreModule,
                            material.MatStepperModule,
                            formField.MatFormFieldModule,
                            animations.BrowserAnimationsModule,
                            icon.MatIconModule,
                            material.MatExpansionModule,
                            material.MatCardModule,
                            material.MatDialogModule,
                            material.MatTooltipModule,
                            material.MatDatepickerModule,
                            material.MatNativeDateModule,
                            material.MatInputModule,
                            material.MatButtonModule,
                            material.MatRadioModule,
                            http.HttpClientModule
                        ],
                        exports: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent],
                        entryComponents: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent, ImageViewerDialog],
                        providers: [
                            GpS3ImageViewerService,
                            {
                                provide: ngxComponents.HOOK_COMPONENT,
                                multi: true,
                                useValue: ɵ0
                            }
                        ]
                    },] }
        ];
        return GpS3ImageViewerModule;
    }());

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

    exports.GpS3ImageViewerService = GpS3ImageViewerService;
    exports.GpS3ImageViewerComponent = GpS3ImageViewerComponent;
    exports.ImageViewerDialog = ImageViewerDialog;
    exports.GpS3ImageViewerModule = GpS3ImageViewerModule;
    exports.ɵa = GpS3ImageViewerConfigComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gp-s3-image-viewer.umd.js.map