import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private url= 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  findEjercicios(){
    let getUrl = this.url+"/"+"ejercicios";
    return this.http.get(getUrl)
  }
}
