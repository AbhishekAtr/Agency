import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceSeoComponent } from './ecommerce-seo.component';

describe('EcommerceSeoComponent', () => {
  let component: EcommerceSeoComponent;
  let fixture: ComponentFixture<EcommerceSeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceSeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
