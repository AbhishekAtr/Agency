import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorySoftwareComponent } from './inventory-software.component';

describe('InventorySoftwareComponent', () => {
  let component: InventorySoftwareComponent;
  let fixture: ComponentFixture<InventorySoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorySoftwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorySoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
