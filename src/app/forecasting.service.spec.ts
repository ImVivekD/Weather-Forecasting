import { TestBed } from '@angular/core/testing';

import { ForecastingService } from './forecasting.service';

describe('ForecastingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForecastingService = TestBed.get(ForecastingService);
    expect(service).toBeTruthy();
  });
});
