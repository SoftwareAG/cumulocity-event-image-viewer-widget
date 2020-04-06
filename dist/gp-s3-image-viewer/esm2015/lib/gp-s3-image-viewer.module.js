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
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselImageViewer } from './carousel-image-viewer';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3AtczMtaW1hZ2Utdmlld2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dwLXMzLWltYWdlLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9ncC1zMy1pbWFnZS12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBQ2pILE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFDLG1CQUFtQixFQUFDLG1CQUFtQixFQUFDLGNBQWMsRUFBRSxlQUFlLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDOU0sT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFTLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztXQTRCOUM7SUFDTixFQUFFLEVBQUUsd0JBQXdCO0lBQzVCLEtBQUssRUFBRSxvQkFBb0I7SUFDM0IsV0FBVyxFQUFFLG9CQUFvQjtJQUNqQyxTQUFTLEVBQUUsd0JBQXdCO0lBQ25DLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsSUFBSSxFQUFFO1FBQ0YsR0FBRyxFQUFFO1lBQ0QsT0FBTyxFQUFFO2dCQUNULGNBQWMsRUFBRSxLQUFLO2dCQUNyQixZQUFZLEVBQUUsS0FBSztnQkFDbkIsdUJBQXVCLEVBQUUsS0FBSztnQkFDOUIsZ0JBQWdCLEVBQUUsSUFBSTthQUNyQjtTQUNKO0tBQ0o7Q0FDRjtBQUlULE1BQU0sT0FBTyxxQkFBcUI7OztZQS9DakMsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixFQUFFLGlCQUFpQixFQUFDLG1CQUFtQixDQUFDO2dCQUMvRyxPQUFPLEVBQUU7b0JBQ0wsVUFBVTtvQkFDVixnQkFBZ0I7b0JBQ2hCLGtCQUFrQjtvQkFDbEIsdUJBQXVCO29CQUN2QixhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsY0FBYyxDQUFDLE9BQU8sRUFBRTtpQkFDM0I7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsOEJBQThCLENBQUM7Z0JBQ25FLGVBQWUsRUFBRSxDQUFDLHdCQUF3QixFQUFFLDhCQUE4QixFQUFFLGlCQUFpQixFQUFDLG1CQUFtQixDQUFDO2dCQUNsSCxTQUFTLEVBQUU7b0JBQ1Qsc0JBQXNCO29CQUN0Qjt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsS0FBSyxFQUFFLElBQUk7d0JBQ1gsUUFBUSxJQWdCTDtxQkFDSjtpQkFBQzthQUVMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSE9PS19DT01QT05FTlQsIENvcmVNb2R1bGUgfSBmcm9tICdAYzh5L25neC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LCBJbWFnZVZpZXdlckRpYWxvZyB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudCB9IGZyb20gJy4vZ3AtczMtaW1hZ2Utdmlld2VyLWNvbmZpZy9ncC1zMy1pbWFnZS12aWV3ZXItY29uZmlnLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZSwgTWF0RXhwYW5zaW9uTW9kdWxlLE1hdENhcmRNb2R1bGUsTWF0RGlhbG9nTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLE1hdERhdGVwaWNrZXJNb2R1bGUsTWF0TmF0aXZlRGF0ZU1vZHVsZSxNYXRJbnB1dE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLE1hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBHcFMzSW1hZ2VWaWV3ZXJTZXJ2aWNlIH0gZnJvbSAnLi9ncC1zMy1pbWFnZS12aWV3ZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jYXJvdXNlbCc7XHJcbmltcG9ydCB7IENhcm91c2VsSW1hZ2VWaWV3ZXIgfSBmcm9tICcuL2Nhcm91c2VsLWltYWdlLXZpZXdlcic7XHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LCBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQsIEltYWdlVmlld2VyRGlhbG9nLENhcm91c2VsSW1hZ2VWaWV3ZXJdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgICAgQ29yZU1vZHVsZSxcclxuICAgICAgTWF0U3RlcHBlck1vZHVsZSxcclxuICAgICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcclxuICAgICAgTWF0SWNvbk1vZHVsZSxcclxuICAgICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxyXG4gICAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgICBNYXREaWFsb2dNb2R1bGUsXHJcbiAgICAgIE1hdFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXHJcbiAgICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgICBNYXRCdXR0b25Nb2R1bGUsXHJcbiAgICAgIE1hdFJhZGlvTW9kdWxlLFxyXG4gICAgICBIdHRwQ2xpZW50TW9kdWxlLFxyXG4gICAgICBDYXJvdXNlbE1vZHVsZS5mb3JSb290KClcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtHcFMzSW1hZ2VWaWV3ZXJDb21wb25lbnQsIEdwUzNJbWFnZVZpZXdlckNvbmZpZ0NvbXBvbmVudF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LCBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQsIEltYWdlVmlld2VyRGlhbG9nLENhcm91c2VsSW1hZ2VWaWV3ZXJdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR3BTM0ltYWdlVmlld2VyU2VydmljZSxcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogSE9PS19DT01QT05FTlQsXHJcbiAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgaWQ6ICdzMy1pbWFnZS12aWV3ZXItd2lkZ2V0JyxcclxuICAgICAgICAgIGxhYmVsOiAnRXZlbnQgSW1hZ2UgVmlld2VyJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRXZlbnQgSW1hZ2UgVmlld2VyJyxcclxuICAgICAgICAgIGNvbXBvbmVudDogR3BTM0ltYWdlVmlld2VyQ29tcG9uZW50LFxyXG4gICAgICAgICAgY29uZmlnQ29tcG9uZW50OiBHcFMzSW1hZ2VWaWV3ZXJDb25maWdDb21wb25lbnQsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgbmcxOiB7XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgbm9EZXZpY2VUYXJnZXQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBub05ld1dpZGdldHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBkZXZpY2VUYXJnZXROb3RSZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGdyb3Vwc1NlbGVjdGFibGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEdwUzNJbWFnZVZpZXdlck1vZHVsZSB7IH1cclxuXHJcbiJdfQ==