import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewHeroComponent } from './add-new-hero/add-new-hero.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { CrisisCenterModule } from './crisis-center/crisis-center.module';
// import { AdminModule }             from './admin/admin.module';

// custom directive for form validations
import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveHeroListComponent } from './reactive-hero-list/reactive-hero-list.component';
import { ReactiveHeroDetailComponent } from './reactive-hero-detail/reactive-hero-detail.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

import { LoginRoutingModule }      from './login-routing.module';
import { LoginComponent }          from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    AddNewHeroComponent,
    AddNewHeroComponent,
    ForbiddenValidatorDirective,
    ReactiveFormComponent,
    ReactiveHeroListComponent,
    ReactiveHeroDetailComponent,
    DynamicFormsComponent,
    DynamicFormQuestionComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // AdminModule,
    CrisisCenterModule,

    LoginRoutingModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
