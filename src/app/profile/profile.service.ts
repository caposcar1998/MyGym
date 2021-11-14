import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url= environment.apiUrl+'usuarios'

  constructor(private http: HttpClient, public auth: AuthService) { }


  findUser(mail:String){
    let getUrl = this.url+"/"+mail;
    return this.http.get(getUrl)
  }


  updateUser(updatedInfo:any, id:string){
    const data = JSON.parse(updatedInfo);
    let postUrl = this.url+"/"+id;
    return this.http.put(postUrl,{
      "nombre":data.name,
      "apellido":data.lastName,
      "edad":data.age,
      "tipoCuerpo":data.body,
      "diasGym":parseInt(data.days),
      "horasGym":parseFloat(data.hours),
      "intensidad":parseInt(data.intensity),
      "foto":data.foto,
      "objetivoCuerpo":data.goal
    })
  }
}



