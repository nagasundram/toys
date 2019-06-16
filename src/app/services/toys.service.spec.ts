import { TestBed } from '@angular/core/testing';

import { ToysService } from './toys.service';

describe('ToysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToysService = TestBed.get(ToysService);
    expect(service).toBeTruthy();
  });
});
