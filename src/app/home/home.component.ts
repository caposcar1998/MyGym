import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profileJson: string = "hola"
  crearUsuario: any;

  constructor(private homeService: HomeService,public auth: AuthService) { }

  createNewUser(profile: String, idAuth: String, urlValue: String){
    this.homeService.createUserIfNew(profile,idAuth).subscribe(data=>
      console.log(data))
  }

  ngOnInit(): void {
    this.auth.user$.subscribe( (profile) => (
      this.checkType(profile))
      )
  }
  
  checkType(profile: any):void{
    if((profile.sub).includes("google-oauth2")){
      this.createNewUser(profile.email, profile.sub,"")
      localStorage.setItem('access_token', profile.sub.split('|')[1])
    }else if((profile.sub).includes("twitter")){
      this.createNewUser(profile.nickname, profile.sub,"")
      localStorage.setItem('access_token', profile.sub.split('|')[1])
    }
    else if((profile.sub).includes("auth0")){
      this.createNewUser(profile.name, profile.sub,"")
      localStorage.setItem('access_token', profile.sub.split('|')[1])
      console.log(profile)
    }else if((profile.sub).includes("facebook")){
      this.createNewUser(profile.given_name, profile.sub,"")
      localStorage.setItem('access_token', profile.sub.split('|')[1])
    }
  }

}
