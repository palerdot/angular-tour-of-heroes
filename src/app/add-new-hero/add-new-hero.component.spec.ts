import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHeroComponent } from './add-new-hero.component';

describe('AddNewHeroComponent', () => {
  let component: AddNewHeroComponent;
  let fixture: ComponentFixture<AddNewHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
