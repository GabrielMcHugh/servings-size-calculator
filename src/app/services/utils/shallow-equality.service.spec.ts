import { TestBed } from '@angular/core/testing';

import { ShallowEqualityService } from './shallow-equality.service';

describe('ShallowEqualityService', () => {
  let service: ShallowEqualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShallowEqualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
