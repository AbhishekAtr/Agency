import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyIndianMandarinsComponent } from './case-study-indian-mandarins.component';

describe('CaseStudyIndianMandarinsComponent', () => {
  let component: CaseStudyIndianMandarinsComponent;
  let fixture: ComponentFixture<CaseStudyIndianMandarinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyIndianMandarinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyIndianMandarinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
