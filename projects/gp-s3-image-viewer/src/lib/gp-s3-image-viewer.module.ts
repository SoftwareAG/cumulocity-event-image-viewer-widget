import { NgModule } from '@angular/core';
import { HOOK_COMPONENT, CoreModule } from '@c8y/ngx-components';
import { GpS3ImageViewerComponent } from './gp-s3-image-viewer.component';
import { GpS3ImageViewerConfigComponent } from './gp-s3-image-viewer-config/gp-s3-image-viewer-config.component';

@NgModule({
  declarations: [GpS3ImageViewerComponent,GpS3ImageViewerConfigComponent],
  imports: [
      CoreModule
  ],
  exports: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent],
  entryComponents: [GpS3ImageViewerComponent, GpS3ImageViewerConfigComponent],
  providers: [
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

