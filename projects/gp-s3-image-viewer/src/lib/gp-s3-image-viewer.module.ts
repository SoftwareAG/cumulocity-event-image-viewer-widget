import { NgModule } from '@angular/core';
import { HOOK_COMPONENT, CoreModule } from '@c8y/ngx-components';
import { GpS3ImageViewerComponent, ImageViewerDialog } from './gp-s3-image-viewer.component';
import { GpS3ImageViewerConfigComponent } from './gp-s3-image-viewer-config/gp-s3-image-viewer-config.component';
import {MatStepperModule, MatExpansionModule,MatCardModule,MatDialogModule, MatTooltipModule,MatDatepickerModule,MatNativeDateModule,MatInputModule, MatButtonModule,MatRadioModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { HttpClientModule }    from '@angular/common/http';
@NgModule({
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
      useValue: {
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
        }
    }]

})
export class GpS3ImageViewerModule { }

