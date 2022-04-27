import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectiveCaseStudyComponent } from './detective-case-study.component';

describe('DetectiveCaseStudyComponent', () => {
  let component: DetectiveCaseStudyComponent;
  let fixture: ComponentFixture<DetectiveCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetectiveCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectiveCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
