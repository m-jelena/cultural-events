import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { NewsMainComponent } from './news/news-main/news-main.component';
import { NewsReadComponent } from './news/news-read/news-read.component'; 
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { OrganizationProfileComponent } from './organization-profile/organization-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'resetpass', component: ResetPasswordComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'setnewpassword/:username', component: SetNewPasswordComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'getUserData', component: OrganizationProfileComponent},
  {path: 'landing', component: LandingPageComponent},
  {path: 'news', component: NewsMainComponent},
  {path: 'news-add', component: NewsAddComponent},
  {path: 'news-edit/:id', component: NewsEditComponent},
  {path: 'news-read/:id', component:NewsReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
