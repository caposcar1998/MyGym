import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EjerciciosListaComponent } from './components/ejercicios-lista/ejercicios-lista.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'secure', component: SecureComponent},
  { path: '', component: LandingPageComponent },
  { path: '*', component: HomeComponent, canActivate:[AuthGuard] },
  { path: "ejerciciosLista", component: EjerciciosListaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
