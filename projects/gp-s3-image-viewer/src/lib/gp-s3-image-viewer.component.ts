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
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { EventService } from '@c8y/client';
import { DomSanitizer } from '@angular/platform-browser';
import * as DefaultImage from './gp-default-image';
import { CarouselImageViewer } from './carousel-image-viewer';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'lib-gp-s3-image-viewer',
  templateUrl: './gp-s3-image-viewer.html',
  styleUrls: ['./gp-s3-image-viewer.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GpS3ImageViewerComponent {
  constructor(
    public dialog: MatDialog,
    public events: EventService,
    public imageViewrService: GpS3ImageViewerService,
    public _DomSanitizationService: DomSanitizer
  ) {}


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
  @ViewChild('stepper') stepper: MatStepper;

  // tslint:disable-next-line: use-life-cycle-interface
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
    // this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
    this.url = 'data:image/png;base64, ' + DefaultImage.defaultImage;
  }
  loadImage() {
    this.url = '';
    if ( this.evantData.length > 0 && this.evantData[this.selectedIndex].Image !== undefined) {
      if (this.config.imgSrcType === 'baseUrl') {
        this.fetchImg(
          this.config.baseUrl + this.evantData[this.selectedIndex].Image
        );
      } else {
        this.url = this.imageViewrService.getImage(
          this.evantData[this.selectedIndex].Image
        );
      }
    }
  }
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

  async fetchImg(url) {
    const x = await this.imageViewrService.fetchImageFromBaseUrl(url).toPromise();
    this.url = 'data:image/png;base64, ' + x['encodedString'];
  }
  dateChanged(x, event) {
    if (x === 'from') {
      this.fromDate = event.value;
    } else {
      this.toDate = event.value;
    }
  }
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

  async fetchEvents() {
    // this.config.device.id
    // 1644
    //211
    this.events.listBySource$(
      this.config.device.id,
        { pageSize: 2000 },
        {
          hot: true,
          realtime: true,
        }
      )
      .subscribe((data) => {
        if (this.realtimeState) {
          console.log(data);
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
        //  this.loadImage();
        }
      });
  }
  toggle() {
    this.realtimeState = !this.realtimeState;
    if (this.realtimeState) {
      this.fetchEvents();
    }
  }

  stepperselectected(event) {
    this.url = '';
    this.selectedIndex = event.selectedIndex;
    this.loadImage();
  }
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
    public _DomSanitizationService: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
