import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url= 'http://localhost:8080/usuarios'

  constructor(private http: HttpClient, public auth: AuthService) { }


  
  createUserIfNew(mail: String, idAuth: String){
    let postUrl = this.url+"/"+mail;
    return this.http.post(postUrl,{
      "correo":mail,
      "idAuth":idAuth
    })
  }
}
