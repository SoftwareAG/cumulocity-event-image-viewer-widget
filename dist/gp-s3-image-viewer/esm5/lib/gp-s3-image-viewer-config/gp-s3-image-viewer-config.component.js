/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer-config/gp-s3-image-viewer-config.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'lib-gp-s3-image-viewer-config',
                    template: "<div class=\"form-group\">\r\n    <c8y-form-group>\r\n        <div class=\"container-configimageviwer\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Width</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.width\" style=\"width:100%\" [(ngModel)]=\"config.width\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Image Height</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.height\" style=\"width:100%\" [(ngModel)]=\"config.height\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <mat-radio-group aria-label=\"Select an option\" [(ngModel)]=\"config.imgSrcType\">\r\n            <mat-radio-button value=\"baseUrl\"  >Base URL</mat-radio-button>\r\n            <mat-radio-button value=\"s3key\">S3 Key</mat-radio-button>\r\n          </mat-radio-group>\r\n          <div class=\"form-group\" *ngIf=\"config.imgSrcType == 'baseUrl' \" >\r\n            <label translate>Base URL</label>\r\n            <input class=\"form-control\" type=\"text\" name=\"config.baseUrl\" style=\"width:100%\" [(ngModel)]=\"config.baseUrl\">\r\n        </div>  \r\n        <div class=\"container-configimageviwer\" *ngIf=\"config.imgSrcType == 's3key'\">\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>AccessKey ID</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.accessKeyId\" style=\"width:100%\" [(ngModel)]=\"config.accessKeyId\">\r\n                </div>\r\n                \r\n                <div class=\"form-group\">\r\n                    <label translate>Secret AcessKey</label>\r\n                    <input class=\"form-control\" class=\"form-control\" type=\"password\" name=\"config.secretAccessKey\" style=\"width:100%\" [(ngModel)]=\"config.secretAccessKey\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Signature Version</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.signatureVersion\" style=\"width:100%\" [(ngModel)]=\"config.signatureVersion\">\r\n                </div>\r\n            </div>\r\n            <div class=\"child-configimageviwer\">\r\n                <div class=\"form-group\">\r\n                    <label translate>Region</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.region\" style=\"width:100%\" [(ngModel)]=\"config.region\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label translate>Bucket</label>\r\n                    <input class=\"form-control\" type=\"text\" name=\"config.bucket\" style=\"width:100%\" [(ngModel)]=\"config.bucket\">\r\n                </div>\r\n                \r\n            </div>\r\n          </div>\r\n\r\n    \r\n\r\n\r\n    </c8y-form-group>\r\n</div>",
                    styles: [".container-configimageviwer{display:flex}.child-configimageviwer{flex-grow:1;margin:5px}"]
                }] }
    ];
    /** @nocollapse */
    GpS3ImageViewerConfigComponent.ctorParameters = function () { return []; };
    GpS3ImageViewerConfigComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return GpS3ImageViewerConfigComponent;
}());
export { GpS3ImageViewerConfigComponent };
if (false) {
    /** @type {?} */
    GpS3ImageViewerConfigComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ncC1zMy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy9ncC1zMy1pbWFnZS12aWV3ZXItY29uZmlnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBU0U7UUFETyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtJQUNwQyxDQUFDOzs7O0lBRUQsaURBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLDBvR0FBeUQ7O2lCQUcxRDs7Ozs7eUJBR0EsS0FBSzs7SUFTTixxQ0FBQztDQUFBLEFBakJELElBaUJDO1NBVlksOEJBQThCOzs7SUFDM0MsZ0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1ncC1zMy1pbWFnZS12aWV3ZXItY29uZmlnJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy5jb21wb25lbnQuY3NzJ11cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuQElucHV0KCkgY29uZmlnOiBhbnkgPSB7fTtcclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgICB0aGlzLmNvbmZpZy5pbWdTcmNUeXBlID0gXCJiYXNlVXJsXCJcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==