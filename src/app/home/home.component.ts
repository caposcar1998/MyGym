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
  existeUsuario: string = "No existe"
  
  constructor(private homeService: HomeService,public auth: AuthService) { }



  ngOnInit(): void {
    this.auth.user$.subscribe( (profile) => (
      this.checkType(profile)
      )
      )
  }

  createNewUser(profile: String, idAuth: String, urlValue: String,profileAll:any){
    this.homeService.createUserIfNew(profile,idAuth).subscribe(data=>
      this.checkIfNewUser(profileAll))
  }

  checkIfExists(name:string){
    if (name){
      this.existeUsuario = "Existe"
    }
  }

  checkIfNewUser(profile: any){
      if((profile.sub).includes("google-oauth2")){
        this.homeService.findUser(profile.email).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre),
          err => console.log("No existe este usuario")
          )
      }else if((profile.sub).includes("twitter")){
        this.homeService.findUser(profile.nickname).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre),
          err => console.log("No existe este usuario")
          )
      }
      else if((profile.sub).includes("auth0")){
        this.homeService.findUser(profile.name).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre),
          err => console.log("No existe este usuario")
          )
      }else if((profile.sub).includes("facebook")){
        this.homeService.findUser(profile.given_name).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre),
          err => console.log("No existe este usuario")
          )    
      }
  }
  
  checkType(profile: any):void{
    if((profile.sub).includes("google-oauth2")){
      this.createNewUser(profile.email, profile.sub,"",profile)
    }else if((profile.sub).includes("twitter")){
      this.createNewUser(profile.nickname, profile.sub,"",profile)
    }
    else if((profile.sub).includes("auth0")){
      this.createNewUser(profile.name, profile.sub,"",profile)
      console.log(profile)
    }else if((profile.sub).includes("facebook")){
      this.createNewUser(profile.given_name, profile.sub,"",profile)      
    }
  }



}
