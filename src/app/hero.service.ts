import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // get detail of single hero
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`Porumai fetching hero - ${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("Porumai! kounds heroes fetched");
    return of(HEROES);
  }
}
