import { TestBed } from '@angular/core/testing';

import { NickOcupadoService } from './nick-ocupado.service';

describe('NickOcupadoService', () => {
  let service: NickOcupadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NickOcupadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
