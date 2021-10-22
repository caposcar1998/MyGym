import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetEjercicios } from './models/ejercicios.model';

@Injectable({
  providedIn: 'root'
})
export class RutinaDetService {
  private url= 'http://localhost:8080/ejerciciosrutinas'
  constructor(private http: HttpClient) { }

  findExercies(idEntrada:String){
    let getUrl = this.url+"/"+idEntrada;
    return this.http.get(getUrl)
  }

  findEjercicios(){
    let getUrl = "http://localhost:8080/ejercicios";
    return this.http.get<GetEjercicios>(getUrl)
  }
}
