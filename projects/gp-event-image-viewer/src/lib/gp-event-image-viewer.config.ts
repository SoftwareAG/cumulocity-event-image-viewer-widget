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
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-gp-event-image-viewer-config',
  templateUrl: './gp-event-image-viewer.config.html',
  styleUrls: ['./gp-event-image-viewer.config.css']

})

export class GpEventImageViewerConfigComponent implements OnInit {
@Input() config: any = {};
  constructor() {
    this.config.imgSrcType = 'baseUrl';
  }

  ngOnInit() {

  }

}
