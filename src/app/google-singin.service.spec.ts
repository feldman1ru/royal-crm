import { TestBed } from '@angular/core/testing';

import { GoogleSinginService } from './google-singin.service';

describe('GoogleSinginService', () => {
  let service: GoogleSinginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleSinginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
