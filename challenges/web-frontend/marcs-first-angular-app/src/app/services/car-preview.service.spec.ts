import { TestBed, inject } from '@angular/core/testing';

import { CarPreviewService } from './car-preview.service';

describe('CarPreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarPreviewService]
    });
  });

  it('should be created', inject([CarPreviewService], (service: CarPreviewService) => {
    expect(service).toBeTruthy();
  }));
});
