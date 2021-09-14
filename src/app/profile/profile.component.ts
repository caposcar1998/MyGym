import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  name: string = '';
  lastName: string = '';
  age: number = 0;
  body: string = '';
  days: number = 0;
  hours: number = 0.0;
  intensity: number = 0;
  photo: string = '';
  goal: string = '';

  constructor(private profileService: ProfileService,public auth: AuthService) { }


  ngOnInit(): void {
    this.auth.user$.subscribe( (profile) => (this.checkUser(profile)));
  }

  getData(userData:any){
    if(userData.id){
      this.name = userData.nombre;
      this.lastName = userData.apellido;
      this.age = userData.edad;
      this.body = userData.tipoCuerpo;
      this.days = userData.diasGym;
      this.hours  = userData.horasGym;
      this.intensity = userData.intensidad;
      this.photo = userData.foto;
      this.goal = userData.objetivoCuerpo;
    }
    
  }

  checkUser(profile:any){
    this.profileService.findUser(profile.email).subscribe(data=> 
      this.getData(JSON.parse(data["response"])),
      err => console.log("No existe información de este usuario")
      )

  }
}
