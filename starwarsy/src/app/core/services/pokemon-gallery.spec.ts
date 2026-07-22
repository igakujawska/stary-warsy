import { TestBed } from '@angular/core/testing';

import { PokemonGallery } from './pokemon-gallery';

describe('PokemonGallery', () => {
  let service: PokemonGallery;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonGallery);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
