import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncouneCaseStudyComponent } from './incoune-case-study.component';

describe('IncouneCaseStudyComponent', () => {
  let component: IncouneCaseStudyComponent;
  let fixture: ComponentFixture<IncouneCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncouneCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncouneCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
