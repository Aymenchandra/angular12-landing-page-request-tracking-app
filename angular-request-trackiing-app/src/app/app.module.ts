import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { LoginComponent } from './components/authen/login/login.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { FooterComponent } from './components/footer/footer.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ToastrModule } from 'ngx-toastr';
import { LoginV2Component } from './V2.0/authens/login-v2/login-v2.component';
import { RegisterV2Component } from './V2.0/authens/register-v2/register-v2.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    LoginV2Component,
    RegisterV2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgxCaptchaModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(
      {
        timeOut:1000,
        progressBar:true,
        progressAnimation:'increasing',
        preventDuplicates:true
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
