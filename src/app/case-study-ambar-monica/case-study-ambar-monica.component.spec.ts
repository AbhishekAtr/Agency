import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyAmbarMonicaComponent } from './case-study-ambar-monica.component';

describe('CaseStudyAmbarMonicaComponent', () => {
  let component: CaseStudyAmbarMonicaComponent;
  let fixture: ComponentFixture<CaseStudyAmbarMonicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseStudyAmbarMonicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyAmbarMonicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
