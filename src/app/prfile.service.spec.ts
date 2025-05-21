import { TestBed } from '@angular/core/testing';

import { PrfileService } from './prfile.service';

describe('PrfileService', () => {
  let service: PrfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
