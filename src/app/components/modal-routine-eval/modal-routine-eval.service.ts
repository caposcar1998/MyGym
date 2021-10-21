import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class ModalRoutineEvalService {
  private url= 'http://localhost:8080/evaluacionrutinas';
  private urlR= 'http://localhost:8080/rutinas';

  constructor(private http: HttpClient, public auth: AuthService) { }

  findUser(mail:String){
    let getUrl = 'http://localhost:8080/usuarios'+"/"+mail;
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
}



