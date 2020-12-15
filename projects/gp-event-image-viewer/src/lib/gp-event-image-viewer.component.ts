/*
* Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */
import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Inject,
  Input,
} from '@angular/core';
import {
  MatStepper,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material';
import { GpEventImageViewerService } from './gp-event-image-viewer.service';
import { EventService, Realtime } from '@c8y/client';
import { DomSanitizer } from '@angular/platform-browser';
import * as DefaultImage from './gp-default-image';
import { CarouselImageViewer } from './carousel-image-viewer';
@Component({
  selector: 'lib-gp-event-image-viewer',
  templateUrl: './gp-event-image-viewer.component.html',
  styleUrls: ['./gp-event-image-viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GpEventImageViewerComponent implements OnInit {
  @Input() config;
  isLinear = false;
  panelOpenState = false;
  url = '';
  selectedIndex = 0;
  realtimeState = true;
  evantData = [];
  displayData = [];
  slideshow = false;
  noWrapSlides = false;
  firstCall = false;
  fromDate = '';
  toDate = '';
  imageMap = {};
  @ViewChild('stepper', {static: false}) stepper: MatStepper;

  constructor(
    public dialog: MatDialog,
    public events: EventService,
    public realtimeService: Realtime,
    public imageViewrService: GpEventImageViewerService,
    // tslint:disable-next-line: variable-name
    public _DomSanitizationService: DomSanitizer
  ) { }

  ngOnInit() {
    this.firstCall = true;
    this.refresh();
  }
  async refresh() {
    this.fromDate = '';
    this.toDate = '';
    this.imageViewrService.fetchS3(this.config);
    await this.fetchEvents();
  }
  errorInloading(event) {
    this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
  }
  // fetches image from base url and AWS storage
  async loadImage() {
    this.url = '';
    if ( this.evantData.length > 0 && this.evantData[this.selectedIndex].Image !== undefined) {
      if (this.imageMap.hasOwnProperty(this.evantData[this.selectedIndex].id)) {
        this.url = this.imageMap[this.evantData[this.selectedIndex].id];
      } else {
        if (this.config.imgSrcType === 'baseUrl') {
          this.url = await this.fetchImg(
            this.config.baseUrl + this.evantData[this.selectedIndex].Image
          );
        } else {
          this.url = this.imageViewrService.getImage(
            this.evantData[this.selectedIndex].Image
          );
        }
        this.imageMap[this.evantData[this.selectedIndex].id] = this.url;
      }
    }
  }
  // to show the events in the slide show.It will open a slide show pop-up
  setSlideShow() {
    this.slideshow = !this.slideshow;
    const dialogRef = this.dialog.open(CarouselImageViewer, {
      width: this.config.width + 'px',
      height: this.config.height + 'px',
      data: {
        eventData: this.evantData,
        baseUrl:
          this.config.imgSrcType === 'baseUrl' ? this.config.baseUrl : '',
        width: Number(this.config.width) - 100 + 'px',
        height: Number(this.config.height) - 100 + 'px',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  // this retrieves the base url image
  async fetchImg(url) {
    const x: any = await this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
    return 'data:image/png;base64, ' + x.encodedString;
  }
  // update 'from date' and 'to date' based on date selected
  dateChanged(x, event) {
    if (x === 'from') {
      this.fromDate = event.value;
    } else {
      this.toDate = event.value;
    }
  }
  // filters the event list based on selected dates
  filter() {
    this.displayData = this.evantData.filter((singleEvent) => {
      if ( singleEvent.creationTime !== undefined) {
        return (
          Date.parse(singleEvent.creationTime) > Date.parse(this.fromDate) &&
          Date.parse(singleEvent.creationTime) < Date.parse(this.toDate)
        );
      }
      return false;
    });
  }
  openDialog(key): void {
    // tslint:disable-next-line: no-use-before-declare
    const dialogRef = this.dialog.open(ImageViewerDialog, {
      width: this.config.width + 'px',
      height: this.config.height + 'px',
      data: { url: this.url },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }

  // fetches event list from event servcice
  async fetchEvents() {
        // tslint:disable-next-line: deprecation
        this.events.listBySource$(
      this.config.device.id,
        { pageSize: 2000,
          type: this.config.eventType },
        {
          hot: true,
          realtime: true,
        }
      )
      .subscribe((data) => {
        if (this.realtimeState) {
          this.evantData = [...data];
          this.evantData.sort((a, b): number => {
            if ( a.creationTime !== undefined && b.creationTime !== undefined) {
              return a.creationTime > b.creationTime
              ? -1
              : a.creationTime < b.creationTime
              ? 1
              : 0;
            }
            return 0;
          });
          this.displayData = this.evantData;
          setTimeout(() => this.loadImage(), 2000);
        }
      });
  }
  toggle() {
    this.realtimeState = !this.realtimeState;
    if (this.realtimeState) {
      this.fetchEvents();
    }
  }
  // On selection of particular event it will show the image in the dialog
  stepperselectected(event) {
    this.url = '';
    this.selectedIndex = event.selectedIndex;
    this.loadImage();
  }
}

export interface DialogData {
  url: string;
}
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'image-viewer-dialog',
  templateUrl: 'image-viewer-dialog.html',
  styleUrls: ['image-viewer-dialog.css'],
})
// tslint:disable-next-line: component-class-suffix
export class ImageViewerDialog {
  constructor(
    public dialogRef: MatDialogRef<ImageViewerDialog>,
    // tslint:disable-next-line: variable-name
    public _DomSanitizationService: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

