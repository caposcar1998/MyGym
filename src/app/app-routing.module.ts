import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'secure', component: SecureComponent},
  { path: '', component: LandingPageComponent },
  { path: '**', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'profile', component: ProfileComponent },
  { path: 'edit-profile', component: EditProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
