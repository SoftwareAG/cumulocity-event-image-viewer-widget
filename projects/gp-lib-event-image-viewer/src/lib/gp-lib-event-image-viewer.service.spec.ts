import { TestBed } from '@angular/core/testing';

import { GpLibEventImageViewerService } from './gp-lib-event-image-viewer.service';

describe('GpLibEventImageViewerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GpLibEventImageViewerService = TestBed.get(GpLibEventImageViewerService);
    expect(service).toBeTruthy();
  });
});
