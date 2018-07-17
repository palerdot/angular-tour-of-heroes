import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Address, Hero, states } from '../data-model';

import { ReactiveHeroListComponent } from '../reactive-hero-list/reactive-hero-list.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {

  heroForm: FormGroup;
  states = states;
  hero = new Hero();

  constructor(private fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  // creates a form builder
  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });

    this.heroForm.patchValue({
        name:    this.hero.name,
        address: this.hero.addresses ? this.hero.addresses[0] : new Address()
    });
  }

}
