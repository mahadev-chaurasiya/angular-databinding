import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTwoWayDatabindingComponent } from './sample-two-way-databinding.component';

describe('SampleTwoWayDatabindingComponent', () => {
  let component: SampleTwoWayDatabindingComponent;
  let fixture: ComponentFixture<SampleTwoWayDatabindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SampleTwoWayDatabindingComponent]
    });
    fixture = TestBed.createComponent(SampleTwoWayDatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
