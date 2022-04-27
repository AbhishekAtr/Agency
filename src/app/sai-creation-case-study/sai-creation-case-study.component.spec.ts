import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiCreationCaseStudyComponent } from './sai-creation-case-study.component';

describe('SaiCreationCaseStudyComponent', () => {
  let component: SaiCreationCaseStudyComponent;
  let fixture: ComponentFixture<SaiCreationCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiCreationCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiCreationCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
