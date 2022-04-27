import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherTransferCaseComponent } from './teacher-transfer-case.component';

describe('TeacherTransferCaseComponent', () => {
  let component: TeacherTransferCaseComponent;
  let fixture: ComponentFixture<TeacherTransferCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherTransferCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherTransferCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
