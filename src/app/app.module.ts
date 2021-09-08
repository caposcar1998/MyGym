import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProfileInfoComponent } from './side-menu/profile-info/profile-info.component';
import { OptionsComponent } from './side-menu/options/options.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './home/content/content.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { environment as env } from 'src/environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
  { path: '', component: LandingPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProfileInfoComponent,
    OptionsComponent,
    HomeComponent,
    ContentComponent,
    LoginButtonComponent,
    RegisterButtonComponent, 
    HeaderComponent, LogoutButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({ ...env.auth }),
	  RouterModule.forRoot(appRoutes)
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
