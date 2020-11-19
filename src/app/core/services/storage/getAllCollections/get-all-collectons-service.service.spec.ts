import { TestBed } from '@angular/core/testing';

import { GetAllCollectonsService } from './get-all-collectons-service.service';

describe('GetAllCollectonsServiceService', () => {
  let service: GetAllCollectonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllCollectonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
