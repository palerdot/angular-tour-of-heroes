import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components to be shown for routes
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewHeroComponent } from './add-new-hero/add-new-hero.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';

// define the routes
const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'add-hero', component: AddNewHeroComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'dynamic-form', component: DynamicFormsComponent },
  // feature module
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  // no declarations necessary for app routing module
  // declarations: []
})
export class AppRoutingModule { }
