import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveHeroDetailComponent } from './reactive-hero-detail.component';

describe('ReactiveHeroDetailComponent', () => {
  let component: ReactiveHeroDetailComponent;
  let fixture: ComponentFixture<ReactiveHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
