import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { FormsModule }   from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ProfileInfoComponent } from './side-menu/profile-info/profile-info.component';
import { OptionsComponent } from './side-menu/options/options.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { StepsComponent } from './components/create-profile/steps/steps.component';
import { StepTemplateComponent } from './components/create-profile/step-template/step-template.component';
import { PersonalDataComponent } from './components/create-profile/step-template/personal-data/personal-data.component';
import { BodyTypeComponent } from './components/create-profile/step-template/body-type/body-type.component';
import { ObjectivesComponent } from './components/create-profile/step-template/objectives/objectives.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { environment as env } from 'src/environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterButtonComponent } from './components/register-button/register-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { SecureComponent } from './secure/secure.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardComponent } from './components/card/card.component';
import { EjerciciosListaComponent } from './components/ejercicios-lista/ejercicios-lista.component';
import { CardEjerciciosComponent } from './components/card-ejercicios/card-ejercicios.component';
import { RoutinesComponent } from './components/routines/routines.component';
import { CardRoutinesComponent } from './components/card-routines/card-routines.component';
import { ContactUsComponent } from './side-menu/contact-us/contact-us.component';
import { RutinaComponent } from './components/rutina/rutina.component';
import { RutinasRapidasComponent } from './components/rutinas-rapidas/rutinas-rapidas.component';
import { ModalRoutineEvalComponent } from './components/modal-routine-eval/modal-routine-eval.component';
import { CardEjerciciosRutinasComponent } from './components/card-ejercicios-rutinas/card-ejercicios-rutinas.component';
import { RoutineEvalComponent } from './components/routine-eval/routine-eval.component';
import { RutinaDetComponent } from './components/rutina-det/rutina-det.component';
import { DataTablesModule } from "angular-datatables";



const appRoutes: Routes = [
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

    
    LoginButtonComponent,
    RegisterButtonComponent, 
    HeaderComponent, LogoutButtonComponent,
    LandingPageComponent,
    SecureComponent,
    EditProfileComponent,
    CarruselComponent,
    CardComponent,
    EjerciciosListaComponent,
    CardEjerciciosComponent,
    RoutinesComponent,
    CardRoutinesComponent,
    ContactUsComponent,
    RutinaComponent,
    RutinasRapidasComponent,
    ModalRoutineEvalComponent,
    CardEjerciciosRutinasComponent,
    RoutineEvalComponent,
    RutinaDetComponent



  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    MatCardModule,
    AppRoutingModule,
    HttpClientModule,
    NgWizardModule.forRoot(ngWizardConfig),
    FormsModule,
    MatSnackBarModule,
    AuthModule.forRoot({ ...env.auth }),
    NgbModule,
    DataTablesModule 
  ],
  
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
