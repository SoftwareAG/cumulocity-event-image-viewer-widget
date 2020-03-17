/**
 * @fileoverview added by tsickle
 * Generated from: lib/gp-s3-image-viewer.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HOOK_COMPONENT, CoreModule } from '@c8y/ngx-components';
import { GpS3ImageViewerComponent, ImageViewerDialog } from './gp-s3-image-viewer.component';
import { GpS3ImageViewerConfigComponent } from './gp-s3-image-viewer-config/gp-s3-image-viewer-config.component';
import { MatStepperModule, MatExpansionModule, MatCardModule, MatDialogModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatButtonModule, MatRadioModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { HttpClientModule } from '@angular/common/http';
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
    return GpS3ImageViewerModule;
}());
export { GpS3ImageViewerModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOU0sT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFTLHNCQUFzQixDQUFDO1NBMkIzQztJQUNOLEVBQUUsRUFBRSx3QkFBd0I7SUFDNUIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixXQUFXLEVBQUUsaUJBQWlCO0lBQzlCLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkMsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLFlBQVksRUFBRSxLQUFLO2dCQUNuQix1QkFBdUIsRUFBRSxLQUFLO2dCQUM5QixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3JCO1NBQ0o7S0FDSjtDQUNGO0FBMUNUO0lBQUE7SUE4Q3FDLENBQUM7O2dCQTlDckMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixFQUFFLGlCQUFpQixDQUFDO29CQUMzRixPQUFPLEVBQUU7d0JBQ0wsVUFBVTt3QkFDVixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLENBQUM7b0JBQ25FLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixFQUFFLGlCQUFpQixDQUFDO29CQUM5RixTQUFTLEVBQUU7d0JBQ1Qsc0JBQXNCO3dCQUN0Qjs0QkFDRSxPQUFPLEVBQUUsY0FBYzs0QkFDdkIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsUUFBUSxJQWdCTDt5QkFDSjtxQkFBQztpQkFFTDs7SUFDb0MsNEJBQUM7Q0FBQSxBQTlDdEMsSUE4Q3NDO1NBQXpCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhPT0tfQ09NUE9ORU5ULCBDb3JlTW9kdWxlIH0gZnJvbSAnQGM4eS9uZ3gtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2cgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci1jb25maWcvZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSxNYXRDYXJkTW9kdWxlLE1hdERpYWxvZ01vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZSxNYXREYXRlcGlja2VyTW9kdWxlLE1hdE5hdGl2ZURhdGVNb2R1bGUsTWF0SW5wdXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSxNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyU2VydmljZSB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0dwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50LCBJbWFnZVZpZXdlckRpYWxvZ10sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgICBDb3JlTW9kdWxlLFxyXG4gICAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICAgIEh0dHBDbGllbnRNb2R1bGVcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LCBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQsIEltYWdlVmlld2VyRGlhbG9nXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdwUzNJbWFnZVZpZXdlclNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhPT0tfQ09NUE9ORU5ULFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlVmFsdWU6IHtcclxuICAgICAgICAgIGlkOiAnczMtaW1hZ2Utdmlld2VyLXdpZGdldCcsXHJcbiAgICAgICAgICBsYWJlbDogJ1MzIEltYWdlIFZpZXdlcicsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ1MzIEltYWdlIFZpZXdlcicsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IEdwUzNJbWFnZVZpZXdlckNvbXBvbmVudCxcclxuICAgICAgICAgIGNvbmZpZ0NvbXBvbmVudDogR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIG5nMToge1xyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgIG5vRGV2aWNlVGFyZ2V0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbm9OZXdXaWRnZXRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgZGV2aWNlVGFyZ2V0Tm90UmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBncm91cHNTZWxlY3RhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJNb2R1bGUgeyB9XHJcblxyXG4iXX0=