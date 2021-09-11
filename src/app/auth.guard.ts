import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router : Router, private auth : AuthService){
  }
  canActivate(): boolean {
    this.getToken();
    if(!!localStorage.getItem('browser-tabs-lock-key-auth0.lock.getTokenSilently') || !!localStorage.getItem('access_token')){
      console.log("Sí autenticado.")
      return true;
    }else{
      console.log("No autenticado.")
      this.router.navigate(['/'])
      return false;
    }
  }

  getToken() {
    this.auth.user$.subscribe( (profile_e) => (
      localStorage.setItem('access_token', profile_e.sub.split('|')[1])
    ))
  } 



}
