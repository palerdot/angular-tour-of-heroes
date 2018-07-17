import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { Hero } from '../data-model';
import { ReactiveHeroService } from '../reactive-hero.service';

@Component({
  selector: 'app-reactive-hero-list',
  templateUrl: './reactive-hero-list.component.html',
  styleUrls: ['./reactive-hero-list.component.css']
})
export class ReactiveHeroListComponent implements OnInit {
  heroes: Observable<Hero[]>;
  isLoading = false;
  selectedHero: Hero;

  constructor(private heroService: ReactiveHeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService
                      .getHeroes()
                      .pipe(finalize(() => this.isLoading = false));
    this.selectedHero = undefined;
  }

  select(hero: Hero) {
    this.selectedHero = hero;
  }
}
