import { TestBed } from '@angular/core/testing';

import { ExtinguisherService } from './extinguisher.service';

describe('ExtinguisherService', () => {
  let service: ExtinguisherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtinguisherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
