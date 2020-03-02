import { TestBed } from '@angular/core/testing';

import { GpS3ImageViewerService } from './gp-s3-image-viewer.service';

describe('GpS3ImageViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpS3ImageViewerService = TestBed.get(GpS3ImageViewerService);
    expect(service).toBeTruthy();
  });
});
