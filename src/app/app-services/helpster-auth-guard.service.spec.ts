import { TestBed } from '@angular/core/testing';

import { HelpsterAuthGuardService } from './helpster-auth-guard.service';

describe('HelpsterAuthGuardService', () => {
  let service: HelpsterAuthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpsterAuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
