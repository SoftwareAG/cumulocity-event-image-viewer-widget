import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GpS3ImageViewerConfigComponent } from './gp-s3-image-viewer-config.component';

describe('GpS3ImageViewerConfigComponent', () => {

  let component: GpS3ImageViewerConfigComponent;
  let fixture: ComponentFixture<GpS3ImageViewerConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpS3ImageViewerConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpS3ImageViewerConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
