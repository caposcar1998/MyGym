import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { AuthService } from '@auth0/auth0-angular';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  userData = <any> {};


  constructor(private profileService: ProfileService,public auth: AuthService, 
    private router: Router ) { }


  ngOnInit(): void {
    
    this.auth.user$.subscribe( (profile) => (this.checkUser(profile)));
  }

  getData(values:any){
    if(values.id){
      
      this.userData = values;
    }
    
  }

  onEditData(form:NgForm){
    console.log("On update user: " + JSON.stringify(form.value));
    
    this.auth.user$.subscribe((profile)=> (this.updateUser(profile, form)));

    

  }

  onCancelData(){
    this.router.navigate(['/profile']);
  }


  updateUser(profile:any, form:any){
    localStorage.setItem('editData', JSON.stringify(form.value));
    console.log(profile.id);
    this.profileService.updateUser(localStorage.getItem('editData'), localStorage.getItem('id')).subscribe(data=>
      localStorage.removeItem("editData"));
      window.alert("Has cambiado con éxito tus datos");
      this.router.navigate(['/profile']);
  }



  checkUser(profile:any){
    this.profileService.findUser(profile.email).subscribe(data=> 
      this.getData(JSON.parse(data["response"])),
      err => console.log("No existe información de este usuario")
      )
  }


}
