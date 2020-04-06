import { MatDialogRef } from '@angular/material';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { DomSanitizer } from '@angular/platform-browser';
export interface DialogData {
    eventData: any;
    baseUrl: string;
    width: string;
    height: string;
}
export declare class CarouselImageViewer {
    dialogRef: MatDialogRef<CarouselImageViewer>;
    imageViewrService: GpS3ImageViewerService;
    _DomSanitizationService: DomSanitizer;
    data: DialogData;
    url: string;
    noWrapSlides: boolean;
    imageType: string;
    time: string;
    constructor(dialogRef: MatDialogRef<CarouselImageViewer>, imageViewrService: GpS3ImageViewerService, _DomSanitizationService: DomSanitizer, data: DialogData);
    onNoClick(): void;
    errorInloading(event: any): void;
    carouselChanged(event: any): void;
    fetchImg(url: any): Promise<void>;
}
