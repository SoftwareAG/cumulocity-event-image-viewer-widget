import { NgModule } from '@angular/core';
import { HOOK_COMPONENTS, CoreModule } from '@c8y/ngx-components';
import { GpLibEventImageViewerComponent, ImageViewerDialog } from './gp-lib-event-image-viewer.component';
import { GpLibEventImageViewerConfigComponent } from './gp-lib-event-image-viewer.config';
import {MatStepperModule,
  MatExpansionModule,
  MatCardModule,
  MatDialogModule,
  MatTooltipModule,
  // MatDatepickerModule,
  // MatNativeDateModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule} from '@angular/material';

import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GpLibEventImageViewerService } from './gp-lib-event-image-viewer.service';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselImageViewer } from './carousel-image-viewer';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [GpLibEventImageViewerComponent, GpLibEventImageViewerConfigComponent, CarouselImageViewer, ImageViewerDialog],
  imports: [
    CoreModule,
    ReactiveFormsModule,
    MatStepperModule,
   // MatFormFieldModule,
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
  exports: [GpLibEventImageViewerComponent, GpLibEventImageViewerConfigComponent],
  entryComponents: [GpLibEventImageViewerComponent, GpLibEventImageViewerConfigComponent, ImageViewerDialog, CarouselImageViewer],
  providers: [
    GpLibEventImageViewerService,
    {
      provide: HOOK_COMPONENTS,
      multi: true,
      useValue: {
          id: 's3-image-viewer-widget',
          label: 'Event Image Viewer',
          description: 'Event Image Viewer',
          component: GpLibEventImageViewerComponent,
          configComponent: GpLibEventImageViewerConfigComponent,
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
export class GpLibEventImageViewerModule { }
