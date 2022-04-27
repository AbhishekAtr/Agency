import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetRegistrationCaseComponent } from './pet-registration-case.component';

describe('PetRegistrationCaseComponent', () => {
  let component: PetRegistrationCaseComponent;
  let fixture: ComponentFixture<PetRegistrationCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetRegistrationCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetRegistrationCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
