import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Hero, heroes } from './data-model';

@Injectable({
  providedIn: 'root'
})
export class ReactiveHeroService {

  delayMs = 500;

  // fake server get; assuming nothing can go wrong
  getHeroes(): Observable<Hero[]> {
    return of(heroes)
            .pipe(
              delay(this.delayMs)
            );
  }

  // fake server update; assuming nothing can go wrong
  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id);
    // mutate cached hero?
    const newHero = Object.assign(oldHero, hero);
    return of(newHero)
            .pipe(delay(this.delayMs))
  }

  constructor() { }
}
