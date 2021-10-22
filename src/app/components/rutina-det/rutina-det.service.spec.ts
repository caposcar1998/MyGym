import { TestBed } from '@angular/core/testing';

import { RutinaDetService } from './rutina-det.service';

describe('RutinaDetService', () => {
  let service: RutinaDetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinaDetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
