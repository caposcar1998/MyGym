import { TestBed } from '@angular/core/testing';

import { RutinasRapidasService } from './rutinas-rapidas.service';

describe('RutinasRapidasService', () => {
  let service: RutinasRapidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinasRapidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
