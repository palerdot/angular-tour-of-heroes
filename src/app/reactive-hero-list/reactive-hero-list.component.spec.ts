import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveHeroListComponent } from './reactive-hero-list.component';

describe('ReactiveHeroListComponent', () => {
  let component: ReactiveHeroListComponent;
  let fixture: ComponentFixture<ReactiveHeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveHeroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
