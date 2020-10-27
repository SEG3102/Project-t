import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalPrescriptionComponent } from './medical-prescription.component';

describe('MedicalPrescriptionComponent', () => {
  let component: MedicalPrescriptionComponent;
  let fixture: ComponentFixture<MedicalPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
