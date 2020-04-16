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
import { MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselImageViewer } from './carousel-image-viewer';
import { ReactiveFormsModule } from '@angular/forms';
var ɵ0 = {
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
var GpS3ImageViewerModule = /** @class */ (function () {
    function GpS3ImageViewerModule() {
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
    return GpS3ImageViewerModule;
}());
export { GpS3ImageViewerModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOU0sT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFTLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztTQTZCckM7SUFDTixFQUFFLEVBQUUsd0JBQXdCO0lBQzVCLEtBQUssRUFBRSxvQkFBb0I7SUFDM0IsV0FBVyxFQUFFLG9CQUFvQjtJQUNqQyxTQUFTLEVBQUUsd0JBQXdCO0lBQ25DLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFO2dCQUNULGNBQWMsRUFBRSxLQUFLO2dCQUNyQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsdUJBQXVCLEVBQUUsS0FBSztnQkFDOUIsZ0JBQWdCLEVBQUUsSUFBSTthQUNyQjtTQUNKO0tBQ0o7Q0FDRjtBQTVDVDtJQUFBO0lBZ0RxQyxDQUFDOztnQkFoRHJDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsRUFBRSxpQkFBaUIsRUFBQyxtQkFBbUIsQ0FBQztvQkFDL0csT0FBTyxFQUFFO3dCQUNMLFVBQVU7d0JBQ1YsbUJBQW1CO3dCQUNuQixnQkFBZ0I7d0JBQ2hCLGtCQUFrQjt3QkFDbEIsdUJBQXVCO3dCQUN2QixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtxQkFDM0I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLENBQUM7b0JBQ25FLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixFQUFFLGlCQUFpQixFQUFDLG1CQUFtQixDQUFDO29CQUNsSCxTQUFTLEVBQUU7d0JBQ1Qsc0JBQXNCO3dCQUN0Qjs0QkFDRSxPQUFPLEVBQUUsY0FBYzs0QkFDdkIsS0FBSyxFQUFFLElBQUk7NEJBQ1gsUUFBUSxJQWdCTDt5QkFDSjtxQkFBQztpQkFFTDs7SUFDb0MsNEJBQUM7Q0FBQSxBQWhEdEMsSUFnRHNDO1NBQXpCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhPT0tfQ09NUE9ORU5ULCBDb3JlTW9kdWxlIH0gZnJvbSAnQGM4eS9uZ3gtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2cgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci1jb25maWcvZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGUsIE1hdEV4cGFuc2lvbk1vZHVsZSxNYXRDYXJkTW9kdWxlLE1hdERpYWxvZ01vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZSxNYXREYXRlcGlja2VyTW9kdWxlLE1hdE5hdGl2ZURhdGVNb2R1bGUsTWF0SW5wdXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSxNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nhcm91c2VsJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJbWFnZVZpZXdlciB9IGZyb20gJy4vY2Fyb3VzZWwtaW1hZ2Utdmlld2VyJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2csQ2Fyb3VzZWxJbWFnZVZpZXdlcl0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgICBDb3JlTW9kdWxlLFxyXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0dwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2csQ2Fyb3VzZWxJbWFnZVZpZXdlcl0sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIT09LX0NPTVBPTkVOVCxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZVZhbHVlOiB7XHJcbiAgICAgICAgICBpZDogJ3MzLWltYWdlLXZpZXdlci13aWRnZXQnLFxyXG4gICAgICAgICAgbGFiZWw6ICdFdmVudCBJbWFnZSBWaWV3ZXInLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdFdmVudCBJbWFnZSBWaWV3ZXInLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICBjb25maWdDb21wb25lbnQ6IEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBuZzE6IHtcclxuICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICBub0RldmljZVRhcmdldDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIG5vTmV3V2lkZ2V0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGRldmljZVRhcmdldE5vdFJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgZ3JvdXBzU2VsZWN0YWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyTW9kdWxlIHsgfVxyXG5cclxuIl19