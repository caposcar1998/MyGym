import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  profileJson: string = ""
  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.user$.subscribe( (profile) => (
      this.profileJson = JSON.stringify(profile.given_name,null,2),
      this.getToken(profile)
    ))
    
  }
  getToken(profile: any):void{
    localStorage.setItem('access_token', profile.sub.split('|')[1])
  }
}
