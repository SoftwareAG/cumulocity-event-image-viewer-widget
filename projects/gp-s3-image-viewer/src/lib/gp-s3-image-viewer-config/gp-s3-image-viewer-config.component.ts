import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-gp-s3-image-viewer-config',
  templateUrl: './gp-s3-image-viewer-config.component.html',
  styleUrls: ['./gp-s3-image-viewer-config.component.css']

})

export class GpS3ImageViewerConfigComponent implements OnInit {
@Input() config: any = {};
  constructor() { }

  ngOnInit() {

  }

}
