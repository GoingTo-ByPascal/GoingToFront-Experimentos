import { TestBed } from '@angular/core/testing';

import { LocatableService } from './locatable.service';

describe('LocatableService', () => {
  let service: LocatableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocatableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
