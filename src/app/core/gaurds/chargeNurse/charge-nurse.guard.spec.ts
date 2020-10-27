import { TestBed } from '@angular/core/testing';

import { ChargeNurseGuard } from './charge-nurse.guard';

describe('ChargeNurseGuard', () => {
  let guard: ChargeNurseGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChargeNurseGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
