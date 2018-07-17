import { TestBed, inject } from '@angular/core/testing';

import { ReactiveHeroService } from './reactive-hero.service';

describe('ReactiveHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReactiveHeroService]
    });
  });

  it('should be created', inject([ReactiveHeroService], (service: ReactiveHeroService) => {
    expect(service).toBeTruthy();
  }));
});
