import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url= environment.apiUrl+'usuarios'
  private urlR = environment.apiUrl+'rutinas'

  constructor(private http: HttpClient, public auth: AuthService) { }


  findUser(mail:String){
    let getUrl = this.url+"/"+mail;
    return this.http.get(getUrl)
  }
  
  createUserIfNew(mail: String, idAuth: String){
    let postUrl = this.url+"/"+mail;
    return this.http.post(postUrl,{
      "correo":mail,
      "idAuth":idAuth
    })
  }

  findFirstRutine(userId){
    let urlGet = this.urlR+"/rutina/"+userId
    return this.http.get(urlGet)
  }

}
