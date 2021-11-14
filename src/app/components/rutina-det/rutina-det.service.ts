import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetEjercicios } from './models/ejercicios.model';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RutinaDetService {
  private url= environment.apiUrl+'ejerciciosrutinas'
  constructor(private http: HttpClient) { }

  findExercies(idEntrada:String){
    let getUrl = this.url+"/"+idEntrada;
    return this.http.get(getUrl)
  }

  findEjercicios(){
    let getUrl = environment.apiUrl+"ejercicios";
    return this.http.get<GetEjercicios>(getUrl)
  }
}
