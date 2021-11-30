import { TestBed } from '@angular/core/testing';

import { RegexcalculationService } from './regexcalculation.service';

describe('RegexcalculationService', () => {
  let service: RegexcalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegexcalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
