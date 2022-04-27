import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdPhotographyComponent } from './ssd-photography.component';

describe('SsdPhotographyComponent', () => {
  let component: SsdPhotographyComponent;
  let fixture: ComponentFixture<SsdPhotographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsdPhotographyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsdPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
