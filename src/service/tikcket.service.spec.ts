/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TikcketService } from './tikcket.service';

describe('Service: Tikcket', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TikcketService]
    });
  });

  it('should ...', inject([TikcketService], (service: TikcketService) => {
    expect(service).toBeTruthy();
  }));
});
