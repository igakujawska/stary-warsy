import { TestBed } from '@angular/core/testing';

import { StarWarsApi } from './star-wars-api';

describe('StarWarsApi', () => {
  let service: StarWarsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
