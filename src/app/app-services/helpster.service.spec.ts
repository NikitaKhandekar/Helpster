import { TestBed } from '@angular/core/testing';

import { HelpsterService } from './helpster.service';

describe('HelpsterService', () => {
  let service: HelpsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
