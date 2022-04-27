import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyEasePharmaComponent } from './case-study-ease-pharma.component';

describe('CaseStudyEasePharmaComponent', () => {
  let component: CaseStudyEasePharmaComponent;
  let fixture: ComponentFixture<CaseStudyEasePharmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyEasePharmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyEasePharmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
