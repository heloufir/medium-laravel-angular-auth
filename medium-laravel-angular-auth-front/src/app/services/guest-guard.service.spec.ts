import { TestBed } from '@angular/core/testing';

import { GuestGuardService } from './guest-guard.service';

describe('GuestGuardService', () => {
  let service: GuestGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuestGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
