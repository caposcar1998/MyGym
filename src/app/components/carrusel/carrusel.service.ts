import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  private urlR = environment.apiUrl+'rutinas'
  private url= environment.apiUrl+'usuariosId'
  private urlN = environment.apiUrl+'rutinas/nuevaRutina'
  
  constructor(private http: HttpClient) { }

  findAllRutines(userId){
    let urlGet = this.urlR+"/"+userId
    return this.http.get(urlGet)
  }

  getUserInfo(idUser){
    let urlGet = this.url+"/"+idUser 
    return this.http.get(urlGet);
  }

  createRutines(personalData:string,bodyType:string,objetivo:string,id:string){
    let postUrl = this.urlN;
    const personal = JSON.parse(personalData);
    const body = JSON.parse(bodyType)
    const obj = JSON.parse(objetivo)
    return this.http.post(postUrl,{
      "tipoCuerpo": body.bodyType,
      "objetivoCuerpo": obj.goalm,
      "diasGym": obj.daysForWeek,
      "horasGym":obj.hours,
      "intensidad":obj.intesity,
      "idUsuario": parseInt(id),
      "nombreUsuario" : personal.name
    })
  }

}
