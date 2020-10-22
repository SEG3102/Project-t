import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SighnupComponent } from './sighnup.component';

describe('SighnupComponent', () => {
  let component: SighnupComponent;
  let fixture: ComponentFixture<SighnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SighnupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SighnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
