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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGVBQWUsRUFDZixjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO1NBNkJyQztJQUNOLEVBQUUsRUFBRSx3QkFBd0I7SUFDNUIsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQixXQUFXLEVBQUUsb0JBQW9CO0lBQ2pDLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkMsZUFBZSxFQUFFLDhCQUE4QjtJQUMvQyxJQUFJLEVBQUU7UUFDRixHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUU7Z0JBQ1QsY0FBYyxFQUFFLEtBQUs7Z0JBQ3JCLFlBQVksRUFBRSxLQUFLO2dCQUNuQix1QkFBdUIsRUFBRSxLQUFLO2dCQUM5QixnQkFBZ0IsRUFBRSxJQUFJO2FBQ3JCO1NBQ0o7S0FDSjtDQUNGO0FBNUNUO0lBQUE7SUFnRHFDLENBQUM7O2dCQWhEckMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixFQUFFLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO29CQUNoSCxPQUFPLEVBQUU7d0JBQ0wsVUFBVTt3QkFDVixtQkFBbUI7d0JBQ25CLGdCQUFnQjt3QkFDaEIsa0JBQWtCO3dCQUNsQix1QkFBdUI7d0JBQ3ZCLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixjQUFjLENBQUMsT0FBTyxFQUFFO3FCQUMzQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSw4QkFBOEIsQ0FBQztvQkFDbkUsZUFBZSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7b0JBQ25ILFNBQVMsRUFBRTt3QkFDVCxzQkFBc0I7d0JBQ3RCOzRCQUNFLE9BQU8sRUFBRSxjQUFjOzRCQUN2QixLQUFLLEVBQUUsSUFBSTs0QkFDWCxRQUFRLElBZ0JMO3lCQUNKO3FCQUFDO2lCQUVMOztJQUNvQyw0QkFBQztDQUFBLEFBaER0QyxJQWdEc0M7U0FBekIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSE9PS19DT01QT05FTlQsIENvcmVNb2R1bGUgfSBmcm9tICdAYzh5L25neC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LCBJbWFnZVZpZXdlckRpYWxvZyB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy9ncC1zMy1pbWFnZS12aWV3ZXItY29uZmlnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZSxcclxuICAgICAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcclxuICAgICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgICAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyU2VydmljZSB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2Fyb3VzZWwnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbEltYWdlVmlld2VyIH0gZnJvbSAnLi9jYXJvdXNlbC1pbWFnZS12aWV3ZXInO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0dwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50LCBJbWFnZVZpZXdlckRpYWxvZywgQ2Fyb3VzZWxJbWFnZVZpZXdlcl0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgICBDb3JlTW9kdWxlLFxyXG4gICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICBNYXRTdGVwcGVyTW9kdWxlLFxyXG4gICAgICBNYXRGb3JtRmllbGRNb2R1bGUsXHJcbiAgICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxyXG4gICAgICBNYXRJY29uTW9kdWxlLFxyXG4gICAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXHJcbiAgICAgIE1hdENhcmRNb2R1bGUsXHJcbiAgICAgIE1hdERpYWxvZ01vZHVsZSxcclxuICAgICAgTWF0VG9vbHRpcE1vZHVsZSxcclxuICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgICAgTWF0SW5wdXRNb2R1bGUsXHJcbiAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICAgIEh0dHBDbGllbnRNb2R1bGUsXHJcbiAgICAgIENhcm91c2VsTW9kdWxlLmZvclJvb3QoKVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0dwUzNJbWFnZVZpZXdlckNvbXBvbmVudCwgR3BTM0ltYWdlVmlld2VyQ29uZmlnQ29tcG9uZW50XSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCwgSW1hZ2VWaWV3ZXJEaWFsb2csIENhcm91c2VsSW1hZ2VWaWV3ZXJdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR3BTM0ltYWdlVmlld2VyU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSE9PS19DT01QT05FTlQsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgaWQ6ICdzMy1pbWFnZS12aWV3ZXItd2lkZ2V0JyxcclxuICAgICAgICAgIGxhYmVsOiAnRXZlbnQgSW1hZ2UgVmlld2VyJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRXZlbnQgSW1hZ2UgVmlld2VyJyxcclxuICAgICAgICAgIGNvbXBvbmVudDogR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LFxyXG4gICAgICAgICAgY29uZmlnQ29tcG9uZW50OiBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgbmcxOiB7XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgbm9EZXZpY2VUYXJnZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBub05ld1dpZGdldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBkZXZpY2VUYXJnZXROb3RSZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGdyb3Vwc1NlbGVjdGFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEdwUzNJbWFnZVZpZXdlck1vZHVsZSB7IH1cclxuXHJcbiJdfQ==