import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAssociatesComponent } from './our-associates.component';

describe('OurAssociatesComponent', () => {
  let component: OurAssociatesComponent;
  let fixture: ComponentFixture<OurAssociatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAssociatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAssociatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
