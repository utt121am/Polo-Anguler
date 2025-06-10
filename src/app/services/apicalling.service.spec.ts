import { TestBed } from '@angular/core/testing';

import { ApicallingService } from './apicalling.service';

describe('ApicallingService', () => {
  let service: ApicallingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicallingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
