import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewsMainComponent } from './news/news-main/news-main.component';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsReadComponent } from './news/news-read/news-read.component';
import { CustomDatePipe } from './custom-date.pipe';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { ContactComponent } from './contact/contact.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    SetNewPasswordComponent,
    ContactComponent,
    OrganizationProfileComponent,
    NewsMainComponent,
    NewsAddComponent,
    NewsEditComponent,
    NewsReadComponent,
    CustomDatePipe,
    LandingPageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
