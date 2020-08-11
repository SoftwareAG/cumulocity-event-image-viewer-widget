import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-gp-event-image-viewer-config',
  templateUrl: './gp-lib-event-image-viewer.config.html',
  styleUrls: ['./gp-lib-event-image-viewer.config.css']

})

export class GpLibEventImageViewerConfigComponent implements OnInit {
@Input() config: any = {};
  constructor() {
    this.config.imgSrcType = 'baseUrl';
  }

  ngOnInit() {

  }

}
