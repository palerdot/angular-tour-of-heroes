import { Component, OnInit } from '@angular/core';
// get the hero
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // get the heroes!
    this.getHeroes();
  }

  // add a hero
  addHero(name: string) {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }

  // delete a hero
  deleteHero(hero: Hero) {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero)
      .subscribe()
      // .subscribe((_) => this.heroes.filter((h) => h.id !== hero.id))
  }

  // get heroes from the service
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe((heroes) => this.heroes = heroes)
  }

}
