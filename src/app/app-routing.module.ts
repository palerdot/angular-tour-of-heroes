import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

// components to be shown for routes
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewHeroComponent } from './add-new-hero/add-new-hero.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

import { CanDeactivateGuard }      from './can-deactive-guard.service';
import { AuthGuard } from './auth-guard.service';

// define the routes
const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'crisis-list', component: CrisisListComponent },
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
  },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },

  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { enableTracing: true, preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ],
  // no declarations necessary for app routing module
  // declarations: [],
  providers: [ CanDeactivateGuard ]
})
export class AppRoutingModule { }
