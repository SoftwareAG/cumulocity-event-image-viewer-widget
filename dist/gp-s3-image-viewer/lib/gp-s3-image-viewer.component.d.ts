import { MatStepper, MatDialog, MatDialogRef } from '@angular/material';
import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';
import { EventService } from '@c8y/client';
import { DomSanitizer } from '@angular/platform-browser';
export interface DialogData {
    url: string;
}
export declare class GpS3ImageViewerComponent {
    dialog: MatDialog;
    events: EventService;
    imageViewrService: GpS3ImageViewerService;
    _DomSanitizationService: DomSanitizer;
    constructor(dialog: MatDialog, events: EventService, imageViewrService: GpS3ImageViewerService, _DomSanitizationService: DomSanitizer);
    config: any;
    isLinear: boolean;
    panelOpenState: boolean;
    url: string;
    selectedIndex: number;
    realtimeState: boolean;
    evantData: any[];
    stepper: MatStepper;
    ngOnInit(): void;
    refresh(): Promise<void>;
    fetchImg(url: any): Promise<void>;
    filter(dateFrom: any, dateTo: any): void;
    openDialog(key: any): void;
    fetchEvents(): Promise<void>;
    toggle(): void;
    getImage: (key: any) => string;
    stepperselectected(event: any): void;
}
export declare class ImageViewerDialog {
    dialogRef: MatDialogRef<ImageViewerDialog>;
    _DomSanitizationService: DomSanitizer;
    data: DialogData;
    constructor(dialogRef: MatDialogRef<ImageViewerDialog>, _DomSanitizationService: DomSanitizer, data: DialogData);
    onNoClick(): void;
}
