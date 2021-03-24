import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RepositoriosService } from './repositorios.service';

describe('RepositoriosService', () => {
  let service: RepositoriosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RepositoriosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
