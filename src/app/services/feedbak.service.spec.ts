import { TestBed, inject } from '@angular/core/testing';

import { FeedbakService } from './feedbak.service';

describe('FeedbakService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbakService]
    });
  });

  it('should be created', inject([FeedbakService], (service: FeedbakService) => {
    expect(service).toBeTruthy();
  }));
});
