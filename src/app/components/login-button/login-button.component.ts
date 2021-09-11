import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {
  profileJson: string = ""
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  login():void{
      this.auth.loginWithRedirect({
        appState: { target: '/secure' }
      });
      this.auth.user$.subscribe( (profile_e) => (
        localStorage.setItem('access_token', profile_e.sub.split('|')[1])
      ))
  }

}
