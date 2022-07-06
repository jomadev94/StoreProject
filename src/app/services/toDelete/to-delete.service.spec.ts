import { TestBed } from '@angular/core/testing';

import { ToDeleteService } from './to-delete.service';

describe('ToDeleteService', () => {
  let service: ToDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
