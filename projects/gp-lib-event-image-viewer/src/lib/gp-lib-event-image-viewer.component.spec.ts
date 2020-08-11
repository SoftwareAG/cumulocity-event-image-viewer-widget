import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpLibEventImageViewerComponent } from './gp-lib-event-image-viewer.component';

describe('GpLibEventImageViewerComponent', () => {
  let component: GpLibEventImageViewerComponent;
  let fixture: ComponentFixture<GpLibEventImageViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpLibEventImageViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpLibEventImageViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
