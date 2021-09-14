import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url= 'http://localhost:8080/usuarios'

  constructor(private http: HttpClient, public auth: AuthService) { }

  findUser(mail:String){
    let getUrl = this.url+"/"+mail;
    return this.http.get(getUrl)
  }
  
}
