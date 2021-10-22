import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarruselService {

  private urlR = 'http://localhost:8080/rutinas'
  private url= 'http://localhost:8080/usuarios'
  
  constructor(private http: HttpClient) { }

  findAllRutines(userId){
    let urlGet = this.urlR+"/"+userId
    return this.http.get(urlGet)
  }

  createRutines(personalData:string,bodyType:string,objetivo:string,id:string){
    let postUrl = this.url+"/"+"rutinas";
    const personal = JSON.parse(personalData);
    const body = JSON.parse(bodyType)
    const obj = JSON.parse(objetivo)
    return this.http.post(postUrl,{
      "tipoCuerpo": body.bodyType,
      "objetivoCuerpo": obj.goalm,
      "diasGym": parseInt(obj.daysForWeek),
      "horasGym":parseFloat(obj.hours),
      "intensidad":parseInt(obj.intesity),
      "idUsuario": id,
      "nombreUsuario" : personal.name
    })
  }

}
