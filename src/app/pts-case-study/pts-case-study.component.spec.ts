import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtsCaseStudyComponent } from './pts-case-study.component';

describe('PtsCaseStudyComponent', () => {
  let component: PtsCaseStudyComponent;
  let fixture: ComponentFixture<PtsCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtsCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtsCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
