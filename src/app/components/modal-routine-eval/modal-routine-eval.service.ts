import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ModalRoutineEvalService {
  private url= environment.apiUrl+'evaluacionrutinas';
  private urlR= environment.apiUrl+'rutina';

  constructor(private http: HttpClient, public auth: AuthService) { }

  findUser(mail:String){
    let getUrl = environment.apiUrl+'usuarios'+"/"+mail;
    return this.http.get(getUrl)
  }

  addEvaluation(evaluatedData:any, id:string){
    const data = JSON.parse(evaluatedData);
    let postUrl = this.url;
    
    return this.http.post(postUrl,{
      "calificacion": parseInt(data.generalRating),
      "cansancio": parseInt(data.isTiring),
      "dificultad": parseInt(data.isEasy),
      "idRutina":data.routineId,
      "idUsuario": data.userId
    })
  }

  removeRoutine(idRoutine:String){
    console.log("A eliminar Rutina con id: " + idRoutine);
    let deleteUrl = this.urlR+'/rutina/'+idRoutine;
    console.log(deleteUrl)
    this.http.delete(deleteUrl);
    let deleteAll = this.urlR+"/"+idRoutine
    return this.http.delete(deleteAll)
  }

  getEvaluation(id:string){
    let postUrl = this.url+'/'+id;
    return this.http.get(postUrl)
  }

  getRoutine(id:string){
    let postUrl = this.urlR+'/'+id;
    return this.http.get(postUrl);
  }


}



