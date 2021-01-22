import { BrowserModule } from '@angular/platform-browser';

/* Routing */




/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */


import { AngularMaterialModule } from './app/angular-material.module';
import { AppComponent } from './app/app.component';
import { LogInComponent } from './app/components/log-in/log-in.component';
import { RegisterComponent } from './app/components/register/register.component';
import { AppRoutingModule } from './app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AppComponent,
    LogInComponent,
    RegisterComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
