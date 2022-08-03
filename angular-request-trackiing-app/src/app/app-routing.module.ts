import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authen/login/login.component';
import { RegisterComponent } from './components/authen/register/register.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginV2Component } from './V2.0/authens/login-v2/login-v2.component';
import { RegisterV2Component } from './V2.0/authens/register-v2/register-v2.component';

AppComponent
FooterComponent
NavbarComponent

const routes: Routes = [  
{ path: '', pathMatch: 'full', redirectTo: 'accueil' },
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"accueil",component:LandingPageComponent},
{path:"loginV2",component:LoginV2Component},
{path:"registerV2",component:RegisterV2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
