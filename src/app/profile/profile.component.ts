import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service'
import { ProfileService } from './profile.service';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData = <any> {};
  load: boolean = false;

  constructor(public auth: AuthService, 
    private profileService: ProfileService, private router: Router ) { }


  ngOnInit(): void {
    
    this.auth.user$.subscribe( (profile) => (this.checkUser(profile)));
  }

  getData(values:any){
    if(values.id){
      this.userData = values;
  
    }
    
  }

  onEdit(){
    this.router.navigate(['/edit-profile']);
  }

  checkUser(profile:any){
    this.profileService.findUser(profile.email).subscribe(data=> 
      this.getData(JSON.parse(data["response"])),
      err => console.log("No existe información de este usuario")
      )

  }
}
