import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisCenterListComponent } from './crisis-center-list.component';
import { CrisisDetailComponent } from './crisis-center-detail.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ],
  declarations: [
    CrisisCenterComponent,
    CrisisCenterListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
  ]
})
export class CrisisCenterModule { }
