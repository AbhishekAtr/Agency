import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalCenterCaseStudyComponent } from './digital-center-case-study.component';

describe('DigitalCenterCaseStudyComponent', () => {
  let component: DigitalCenterCaseStudyComponent;
  let fixture: ComponentFixture<DigitalCenterCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalCenterCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalCenterCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
