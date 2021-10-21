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

  removeRoutine(idRoutine:string){
    console.log("A eliminar");
    let deleteUrl = this.urlR+'/rutina/'+idRoutine;
    return this.http.delete(deleteUrl);

  }
}



