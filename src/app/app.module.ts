import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';

//Display Component Imports
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChatWindowComponent } from './home-page/ChatWindowFolder/ChatWindowComponent/chat-window/ChatWindowFolder/chat-window.component';
import { RegisterComponent } from './login-page/register/register.component';
import { LogInComponent } from './login-page/log-in/log-in.component';
import { AboutUsComponent } from './about-us/about-us.component';

//imports for users





import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FlexLayoutModule } from "@angular/flex-layout";


import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    ChatWindowComponent,
    RegisterComponent,
    LogInComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AllMaterialComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
