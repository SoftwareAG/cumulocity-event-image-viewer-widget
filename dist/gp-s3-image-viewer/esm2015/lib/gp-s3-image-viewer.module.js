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
export class GpS3ImageViewerModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGVBQWUsRUFDZixjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO1dBNkJyQztJQUNOLEVBQUUsRUFBRSx3QkFBd0I7SUFDNUIsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQixXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkMsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLFlBQVksRUFBRSxLQUFLO2dCQUNuQix1QkFBdUIsRUFBRSxLQUFLO2dCQUM5QixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3JCO1NBQ0o7S0FDSjtDQUNGO0FBSVQsTUFBTSxPQUFPLHFCQUFxQjs7O1lBaERqQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ2hILE9BQU8sRUFBRTtvQkFDTCxVQUFVO29CQUNWLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixrQkFBa0I7b0JBQ2xCLHVCQUF1QjtvQkFDdkIsYUFBYTtvQkFDYixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7aUJBQzNCO2dCQUNELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixDQUFDO2dCQUNuRSxlQUFlLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztnQkFDbkgsU0FBUyxFQUFFO29CQUNULHNCQUFzQjtvQkFDdEI7d0JBQ0UsT0FBTyxFQUFFLGNBQWM7d0JBQ3ZCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFFBQVEsSUFnQkw7cUJBQ0o7aUJBQUM7YUFFTCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhPT0tfQ09NUE9ORU5ULCBDb3JlTW9kdWxlIH0gZnJvbSAnQGM4eS9uZ3gtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2cgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci1jb25maWcvZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGUsXHJcbiAgICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgICBNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxNb2R1bGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nhcm91c2VsJztcclxuaW1wb3J0IHsgQ2Fyb3VzZWxJbWFnZVZpZXdlciB9IGZyb20gJy4vY2Fyb3VzZWwtaW1hZ2Utdmlld2VyJztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2csIENhcm91c2VsSW1hZ2VWaWV3ZXJdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcclxuICAgICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICBDYXJvdXNlbE1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LCBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQsIEltYWdlVmlld2VyRGlhbG9nLCBDYXJvdXNlbEltYWdlVmlld2VyXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdwUzNJbWFnZVZpZXdlclNlcnZpY2UsXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IEhPT0tfQ09NUE9ORU5ULFxyXG4gICAgICBtdWx0aTogdHJ1ZSxcclxuICAgICAgdXNlVmFsdWU6IHtcclxuICAgICAgICAgIGlkOiAnczMtaW1hZ2Utdmlld2VyLXdpZGdldCcsXHJcbiAgICAgICAgICBsYWJlbDogJ0V2ZW50IEltYWdlIFZpZXdlcicsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJ0V2ZW50IEltYWdlIFZpZXdlcicsXHJcbiAgICAgICAgICBjb21wb25lbnQ6IEdwUzNJbWFnZVZpZXdlckNvbXBvbmVudCxcclxuICAgICAgICAgIGNvbmZpZ0NvbXBvbmVudDogR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIG5nMToge1xyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgIG5vRGV2aWNlVGFyZ2V0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgbm9OZXdXaWRnZXRzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgZGV2aWNlVGFyZ2V0Tm90UmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBncm91cHNTZWxlY3RhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfV1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHcFMzSW1hZ2VWaWV3ZXJNb2R1bGUgeyB9XHJcblxyXG4iXX0=