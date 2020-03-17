/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer-config/gp-s3-image-viewer-config.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GpS3ImageViewerConfigComponent {
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
if (false) {
    /** @type {?} */
    GpS3ImageViewerConfigComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy9ncC1zMy1pbWFnZS12aWV3ZXItY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3pELE1BQU0sT0FBTyw4QkFBOEI7SUFFekM7UUFETyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtJQUNwQyxDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6Qywwb0dBQXlEOzthQUcxRDs7Ozs7cUJBR0EsS0FBSzs7OztJQUFOLGdEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dwLXMzLWltYWdlLXZpZXdlci1jb25maWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dwLXMzLWltYWdlLXZpZXdlci1jb25maWcuY29tcG9uZW50LmNzcyddXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbkBJbnB1dCgpIGNvbmZpZzogYW55ID0ge307XHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gICAgdGhpcy5jb25maWcuaW1nU3JjVHlwZSA9IFwiYmFzZVVybFwiXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=