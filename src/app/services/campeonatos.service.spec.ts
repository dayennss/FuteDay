import { TestBed } from '@angular/core/testing';

import { CampeonatosService } from './campeonatos.service';

describe('CampeonatosService', () => {
  let service: CampeonatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeonatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
