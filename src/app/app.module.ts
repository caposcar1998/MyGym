import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProfileInfoComponent } from './side-menu/profile-info/profile-info.component';
import { OptionsComponent } from './side-menu/options/options.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { CreateProfileComponent } from './profile/create-profile/create-profile.component';
import { StepsComponent } from './profile/create-profile/steps/steps.component';
import { StepTemplateComponent } from './profile/create-profile/step-template/step-template.component';
import { PersonalDataComponent } from './profile/create-profile/step-template/personal-data/personal-data.component';
import { BodyTypeComponent } from './profile/create-profile/step-template/body-type/body-type.component';
import { ObjectivesComponent } from './profile/create-profile/step-template/objectives/objectives.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent},
  {  path: 'profile', component: ProfileComponent}
];

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ProfileInfoComponent,
    OptionsComponent,
    HomeComponent,
    ProfileComponent,
    CreateProfileComponent,
    StepsComponent,
    StepTemplateComponent,
    PersonalDataComponent,
    BodyTypeComponent,
    ObjectivesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
	  RouterModule.forRoot(appRoutes),
    NgWizardModule.forRoot(ngWizardConfig),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
