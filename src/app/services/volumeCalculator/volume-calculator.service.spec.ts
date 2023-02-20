import { TestBed } from '@angular/core/testing';

import { VolumeCalculatorService } from './volume-calculator.service';

describe('VolumeCalculatorService', () => {
  let service: VolumeCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolumeCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
