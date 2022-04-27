import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagementCaseStudyComponent } from './inventory-management-case-study.component';

describe('InventoryManagementCaseStudyComponent', () => {
  let component: InventoryManagementCaseStudyComponent;
  let fixture: ComponentFixture<InventoryManagementCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryManagementCaseStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryManagementCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
