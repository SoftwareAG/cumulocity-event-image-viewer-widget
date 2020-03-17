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
export class GpS3ImageViewerModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOU0sT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFTLHNCQUFzQixDQUFDO1dBMkIzQztJQUNOLEVBQUUsRUFBRSx3QkFBd0I7SUFDNUIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixXQUFXLEVBQUUsaUJBQWlCO0lBQzlCLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkMsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLFlBQVksRUFBRSxLQUFLO2dCQUNuQix1QkFBdUIsRUFBRSxLQUFLO2dCQUM5QixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3JCO1NBQ0o7S0FDSjtDQUNGO0FBSVQsTUFBTSxPQUFPLHFCQUFxQjs7O1lBOUNqQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzNGLE9BQU8sRUFBRTtvQkFDTCxVQUFVO29CQUNWLGdCQUFnQjtvQkFDaEIsa0JBQWtCO29CQUNsQix1QkFBdUI7b0JBQ3ZCLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZ0JBQWdCO2lCQUNuQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztnQkFDbkUsZUFBZSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQzlGLFNBQVMsRUFBRTtvQkFDVCxzQkFBc0I7b0JBQ3RCO3dCQUNFLE9BQU8sRUFBRSxjQUFjO3dCQUN2QixLQUFLLEVBQUUsSUFBSTt3QkFDWCxRQUFRLElBZ0JMO3FCQUNKO2lCQUFDO2FBRUwiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIT09LX0NPTVBPTkVOVCwgQ29yZU1vZHVsZSB9IGZyb20gJ0BjOHkvbmd4LWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEltYWdlVmlld2VyRGlhbG9nIH0gZnJvbSAnLi9ncC1zMy1pbWFnZS12aWV3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50IH0gZnJvbSAnLi9ncC1zMy1pbWFnZS12aWV3ZXItY29uZmlnL2dwLXMzLWltYWdlLXZpZXdlci1jb25maWcuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRTdGVwcGVyTW9kdWxlLCBNYXRFeHBhbnNpb25Nb2R1bGUsTWF0Q2FyZE1vZHVsZSxNYXREaWFsb2dNb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGUsTWF0RGF0ZXBpY2tlck1vZHVsZSxNYXROYXRpdmVEYXRlTW9kdWxlLE1hdElucHV0TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsTWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlclNlcnZpY2UgfSBmcm9tICcuL2dwLXMzLWltYWdlLXZpZXdlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9ICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2ddLFxyXG4gIGltcG9ydHM6IFtcclxuICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBbR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LCBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnRdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW0dwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50LCBJbWFnZVZpZXdlckRpYWxvZ10sXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlLFxyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBIT09LX0NPTVBPTkVOVCxcclxuICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgIHVzZVZhbHVlOiB7XHJcbiAgICAgICAgICBpZDogJ3MzLWltYWdlLXZpZXdlci13aWRnZXQnLFxyXG4gICAgICAgICAgbGFiZWw6ICdTMyBJbWFnZSBWaWV3ZXInLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICdTMyBJbWFnZSBWaWV3ZXInLFxyXG4gICAgICAgICAgY29tcG9uZW50OiBHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsXHJcbiAgICAgICAgICBjb25maWdDb21wb25lbnQ6IEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBuZzE6IHtcclxuICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgICBub0RldmljZVRhcmdldDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIG5vTmV3V2lkZ2V0czogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGRldmljZVRhcmdldE5vdFJlcXVpcmVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgZ3JvdXBzU2VsZWN0YWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1dXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgR3BTM0ltYWdlVmlld2VyTW9kdWxlIHsgfVxyXG5cclxuIl19