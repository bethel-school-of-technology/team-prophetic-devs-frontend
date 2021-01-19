import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllMaterialComponentsModule } from './Angular Material Imports/all-material-components.module';
//Routing Imports
import { AppRoutingModule } from './app-routing.module';

//Component Imports
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChatWindowComponent } from './home-page/ChatWindowFolder/ChatWindowComponent/chat-window/ChatWindowFolder/chat-window.component';
import { RegisterComponent } from './login-page/register/register.component';
import { LogInComponent } from './login-page/log-in/log-in.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    ChatWindowComponent,
    RegisterComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AllMaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
