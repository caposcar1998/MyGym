import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EjerciciosListaComponent } from './components/ejercicios-lista/ejercicios-lista.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { RoutinesComponent } from './components/routines/routines.component';
import { ContactUsComponent } from './side-menu/contact-us/contact-us.component';
import { RutinaComponent } from './components/rutina/rutina.component';

import { RoutineEvalComponent } from './components/routine-eval/routine-eval.component';

import { RutinasRapidasComponent } from './components/rutinas-rapidas/rutinas-rapidas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'secure', component: SecureComponent},
  { path: '', component: LandingPageComponent },
  { path: '*', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: "ejerciciosLista", component: EjerciciosListaComponent},
  { path: "routines", component: RoutinesComponent},
  { path: "contactanos", component: ContactUsComponent},
  { path: "rutina/:id/ejercicios", component: RutinaComponent},

  { path: "evalRutinas", component: RoutineEvalComponent},

  { path: "rutinasRapidas", component: RutinasRapidasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
