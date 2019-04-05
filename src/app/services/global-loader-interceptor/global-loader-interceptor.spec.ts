import { TestBed } from '@angular/core/testing';

import { GlobalLoaderInterceptorService } from './global-loader-interceptor';

describe('GlobalLoaderInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalLoaderInterceptorService = TestBed.get(GlobalLoaderInterceptorService);
    expect(service).toBeTruthy();
  });
});
