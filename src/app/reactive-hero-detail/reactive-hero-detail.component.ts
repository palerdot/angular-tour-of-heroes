import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Hero, Address } from '../data-model';

import { ReactiveHeroService } from '../reactive-hero.service';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-reactive-hero-detail',
  templateUrl: './reactive-hero-detail.component.html',
  styleUrls: ['./reactive-hero-detail.component.css']
})
export class ReactiveHeroDetailComponent implements OnInit, OnChanges {

  @Input() hero: Hero;
  heroForm: FormGroup;

  constructor(private fb: FormBuilder, private heroService: HeroService) {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    })
  }

  ngOnInit() {
    
  }

  ngOnChanges() {
    this.rebuildForm();
  }

  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  removeLair(address: Address, index: number) {
    // reset the address
    const newAddresses = this.hero.addresses.filter(((a, i) => {
      console.log('filtering ', a, address, i, a == address)
      return i !== index;
    }));
    this.setAddresses(newAddresses);
  }

  // on submitting the form
  onSubmit() {
    this.hero = this.prepareSaveHero();
    this.heroService
      .updateHero(this.hero)
      .subscribe();

    this.rebuildForm();
  }

  // take the changes from the form that has to be saved
  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of addresses/secret lairs from the form model
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return the details to be save
    const saveDetails: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs <-- BAD!
      addresses: secretLairsDeepCopy
    }

    return saveDetails;
  }

  // handle reverting the form changes
  revert() {
    this.rebuildForm();
  }
}
