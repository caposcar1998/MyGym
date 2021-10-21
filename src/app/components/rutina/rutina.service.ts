import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RutinaService {
  
  private url= 'http://localhost:8080/ejerciciosrutinas'
  private urlExercies= 'http://localhost:8080/ejercicio'
  private urlRutina = 'http://localhost:8080/rutina'
  constructor(private http: HttpClient) { }

  findExercies(idEntrada:String){
    let getUrl = this.url+"/"+idEntrada;
    return this.http.get(getUrl)
  }

  findOneExercise(id:String){
    let getUrl = this.urlExercies+"/"+id;
    return this.http.get(getUrl);
  }

  findOneRoutine(id:String){
    let getUrl = this.urlRutina+"/"+id
    return this.http.get(getUrl)
  }

}
