import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components to be shown for routes
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// define the routes
const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // no declarations necessary for app routing module
  // declarations: []
})
export class AppRoutingModule { }
