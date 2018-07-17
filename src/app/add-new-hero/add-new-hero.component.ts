import { Component, OnInit } from '@angular/core';

import { Hero } from '../power-hero';

@Component({
  selector: 'app-add-new-hero',
  templateUrl: './add-new-hero.component.html',
  styleUrls: ['./add-new-hero.component.css']
})
export class AddNewHeroComponent implements OnInit {

  // kounds power
  powers = ['Jgjeee', 'Eyeeew', 'Ahahheehe'];

  model = new Hero(11, 'Kundalakesi', this.powers[1], 'UEU');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

  // add a new hero
  addNewHero() {
    this.model = new Hero(11, '', '');
  }

  // TODO: remove this after development
  get diagnostic() { return JSON.stringify(this.model) };

}
