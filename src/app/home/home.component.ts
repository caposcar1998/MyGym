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
  foto: string = "https://www.entrenamientos.com/media/cache/exercise_750/uploads/exercise/elevacion-lateral-de-hombros-con-mancuernas-2992.png"
  titulo: string ="Brazos de acero"
  tiempo: string = "60"
  descripcion: string = "Para unos brazos de acero"
  
  constructor(private homeService: HomeService,public auth: AuthService) { }



  ngOnInit(): void {
    this.auth.user$.subscribe( (profile) => (this.checkType(profile)));
    
  }

  createNewUser(profile: String, idAuth: String, urlValue: String,profileAll:any){
    this.homeService.createUserIfNew(profile,idAuth).subscribe(data=>
      this.checkIfNewUser(profileAll))
  }

  checkIfExists(nombre:string,id:string){
    localStorage.setItem("id",id)
    if (nombre){
    
      this.existeUsuario = "Existe"
    }
  }

  checkIfNewUser(profile: any){
      if((profile.sub).includes("google-oauth2")){
        this.homeService.findUser(profile.email).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre,JSON.parse(data["response"]).id),
          err => console.log("No existe este usuario")
          )
      }else if((profile.sub).includes("twitter")){
        this.homeService.findUser(profile.nickname).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre,JSON.parse(data["response"]).id),
          err => console.log("No existe este usuario")
          )
      }
      else if((profile.sub).includes("auth0")){
        this.homeService.findUser(profile.name).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre,JSON.parse(data["response"]).id),
          err => console.log("No existe este usuario")
          )
      }else if((profile.sub).includes("facebook")){
        this.homeService.findUser(profile.given_name).subscribe(data=>
          this.checkIfExists(JSON.parse(data["response"]).nombre,JSON.parse(data["response"]).id),
          err => console.log("No existe este usuario")
          )    
      }
  }
  
  checkType(profile: any):void{
    console.log("THE PROFILE ID: " + profile.email)
    if((profile.sub).includes("google-oauth2")){
      this.createNewUser(profile.email, profile.sub,"",profile)
      localStorage.setItem('access_token', profile.sub.split('|')[1])
    }else if((profile.sub).includes("twitter")){
      this.createNewUser(profile.nickname, profile.sub,"",profile)
      localStorage.setItem('access_token', profile.sub.split('|')[1])
    }
    else if((profile.sub).includes("auth0")){
      this.createNewUser(profile.name, profile.sub,"",profile)
      localStorage.setItem('access_token', profile.sub.split('|')[1])
      console.log(profile)
    }else if((profile.sub).includes("facebook")){
      this.createNewUser(profile.given_name, profile.sub,"",profile)    
      localStorage.setItem('access_token', profile.sub.split('|')[1])  
    }
  }



}